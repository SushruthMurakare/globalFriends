const { google } = require('googleapis');
const { getServiceAccountAuth } = require('../lib/googleAuth');

// Streams a single Drive file's bytes through our own domain, so <img> tags
// never depend on Drive's public link-sharing/hotlink behavior.
module.exports = async function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Missing id parameter' });
  }

  try {
    const auth = getServiceAccountAuth(['https://www.googleapis.com/auth/drive.readonly']);
    const drive = google.drive({ version: 'v3', auth });

    const meta = await drive.files.get({ fileId: id, fields: 'mimeType' });
    const fileRes = await drive.files.get(
      { fileId: id, alt: 'media' },
      { responseType: 'stream' }
    );

    res.setHeader('Content-Type', meta.data.mimeType || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

    fileRes.data
      .on('error', (err) => {
        console.error('Drive file stream error:', err);
        if (!res.headersSent) res.status(500);
        res.end();
      })
      .pipe(res);
  } catch (err) {
    console.error('Failed to fetch Drive file:', id, err);
    res.status(500).json({ error: 'Failed to load image' });
  }
};
