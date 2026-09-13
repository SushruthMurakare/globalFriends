// Local-only dev server that runs the same handler functions from /api
// (which use Vercel's serverless-function convention) on a plain Node/
// Express server. This lets `npm start` work end-to-end locally without
// needing the Vercel CLI or a Vercel account login. Never used in
// production — Vercel runs the /api handlers directly there.
require('dotenv').config({ path: '.env.local' });

const express = require('express');
const photosHandler = require('../api/photos');
const photoFileHandler = require('../api/photo-file');

const app = express();
const PORT = process.env.DEV_API_PORT || 3001;

app.get('/api/photos', (req, res) => photosHandler(req, res));
app.get('/api/photo-file', (req, res) => photoFileHandler(req, res));

app.listen(PORT, () => {
  console.log(`Local API dev server running on http://localhost:${PORT}`);
});
