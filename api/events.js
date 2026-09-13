const { google } = require('googleapis');
const { getServiceAccountAuth } = require('../lib/googleAuth');

const SHEET_ID = process.env.EVENTS_SHEET_ID;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Parses "Date"/"Time" cells like "09/01" and "6:00 PM" into a real Date,
// so we can filter out events that have already happened. The sheet's
// dates have no year, so this assumes the current year — it does NOT
// roll a date like "01/05" into next year, since that's indistinguishable
// from an already-passed date earlier this year with the same MM/DD.
// Returns null if the cell can't be confidently parsed.
function parseEventDate(dateStr, timeStr) {
  const parts = (dateStr || '').trim().split('/').map((p) => parseInt(p, 10));
  if (parts.length < 2 || parts.some((n) => Number.isNaN(n))) return null;

  const [month, day, rawYear] = parts;
  const year = !rawYear ? new Date().getFullYear() : rawYear < 100 ? rawYear + 2000 : rawYear;

  // Default to end-of-day when there's no parseable time, so an event
  // stays listed as "upcoming" for the whole day it happens.
  let hours = 23;
  let minutes = 59;
  const timeMatch = (timeStr || '').trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (timeMatch) {
    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const ampm = (timeMatch[3] || '').toUpperCase();
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
  }

  const parsed = new Date(year, month - 1, day, hours, minutes);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

// Simple in-memory cache, same approach as /api/photos.
let cache = { data: null, expires: 0 };

// Only cache when actually running on Vercel (which sets this env var) —
// a local `node server/dev-api.js` process stays long-running across a
// dev session, so caching there just serves stale data during testing.
const IS_VERCEL = !!process.env.VERCEL;

module.exports = async function handler(req, res) {
  try {
    if (IS_VERCEL && cache.data && cache.expires > Date.now()) {
      res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
      return res.status(200).json(cache.data);
    }

    if (!SHEET_ID) {
      throw new Error('Missing EVENTS_SHEET_ID environment variable.');
    }

    const auth = getServiceAccountAuth(['https://www.googleapis.com/auth/spreadsheets.readonly']);
    const sheets = google.sheets({ version: 'v4', auth });

    // No sheet name in the range → defaults to the first visible tab.
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'A:D',
    });

    const rows = result.data.values || [];

    const now = new Date();

    // Row 1 is the header (Event, Date, Time, Location) — skip it, and
    // skip any fully blank rows.
    const events = rows
      .slice(1)
      .filter((row) => (row || []).some((cell) => (cell || '').trim() !== ''))
      .map((row) => {
        const date = row[1] || '';
        const time = row[2] || '';
        return {
          event: row[0] || '',
          date,
          time,
          location: row[3] || '',
          _when: parseEventDate(date, time),
        };
      })
      // Keep future/ongoing events. Keep unparseable dates too rather than
      // risk hiding a real event just because its date cell is malformed.
      .filter((e) => e._when === null || e._when >= now)
      .sort((a, b) => {
        if (a._when === null) return 1;
        if (b._when === null) return -1;
        return a._when - b._when;
      })
      .map(({ _when, ...rest }) => rest);

    cache = { data: events, expires: Date.now() + CACHE_TTL_MS };

    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    res.status(200).json(events);
  } catch (err) {
    console.error('Failed to load events from Sheet:', err);
    res.status(500).json({ error: 'Failed to load events' });
  }
};
