const { google } = require('googleapis');
const { getServiceAccountAuth } = require('../lib/googleAuth');

const FOLDER_ID = process.env.DRIVE_PHOTOS_FOLDER_ID;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Simple in-memory cache. Serverless instances are reused between nearby
// invocations, so this avoids hitting the Drive API on every page load
// while still picking up folder changes within a few minutes.
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

    if (!FOLDER_ID) {
      throw new Error('Missing DRIVE_PHOTOS_FOLDER_ID environment variable.');
    }

    const auth = getServiceAccountAuth(['https://www.googleapis.com/auth/drive.readonly']);
    const drive = google.drive({ version: 'v3', auth });

    const result = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and (mimeType = 'image/jpeg' or mimeType = 'image/png') and trashed = false`,
      fields: 'files(id, name, modifiedTime)',
      orderBy: 'name_natural',
      pageSize: 200,
    });

    const photos = (result.data.files || []).map((f) => ({
      id: f.id,
      name: f.name,
      // The "v" param busts the browser's 1hr image cache whenever the
      // file's content changes (e.g. "Manage versions → Upload new
      // version" in Drive keeps the same file ID) — without it, replacing
      // a photo's content wouldn't show up for anyone with the old image
      // already cached.
      url: `/api/photo-file?id=${f.id}&v=${encodeURIComponent(f.modifiedTime)}`,
      modifiedTime: f.modifiedTime,
    }));

    cache = { data: photos, expires: Date.now() + CACHE_TTL_MS };

    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    res.status(200).json(photos);
  } catch (err) {
    console.error('Failed to list Drive photos:', err);
    res.status(500).json({ error: 'Failed to load photos' });
  }
};
