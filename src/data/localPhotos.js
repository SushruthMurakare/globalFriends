// Fallback photos bundled into the app at build time. Used only if the live
// Google Drive fetch (/api/photos) fails — e.g. a Drive/API outage, a
// credential problem, or the site briefly losing access to Google — so the
// site never shows an empty gallery.
const ctx = require.context('../assets/photos', false, /\.(jpeg|jpg|JPG|png|PNG)$/);
const LOCAL_PHOTOS = ctx.keys().map(ctx);

export default LOCAL_PHOTOS;
