const { google } = require('googleapis');

/**
 * Builds a JWT auth client for the shared Google service account, scoped to
 * whatever API(s) the caller needs (Drive, Sheets, Calendar, ...).
 *
 * Credentials live only in Vercel environment variables — never in the repo.
 */
function getServiceAccountAuth(scopes) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY environment variables.'
    );
  }

  // Vercel stores multi-line env vars with literal "\n" — turn them back
  // into real newlines for the PEM key.
  const key = rawKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({ email, key, scopes });
}

module.exports = { getServiceAccountAuth };
