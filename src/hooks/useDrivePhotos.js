import { useEffect, useState } from 'react';
import LOCAL_PHOTOS from '../data/localPhotos';

/**
 * Fetches the list of photo URLs from the site's own /api/photos endpoint,
 * which proxies a private Google Drive folder through a service account.
 * If that request fails for any reason (Drive outage, bad credentials,
 * network issue, etc.), falls back to the bundled local photos in
 * src/assets/photos instead of showing an empty gallery.
 */
export default function useDrivePhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/photos')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setPhotos(data.map((p) => p.url));
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load photos from Drive — falling back to local photos:', err);
        setError(err);
        setUsingFallback(true);
        setPhotos(LOCAL_PHOTOS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { photos, loading, error, usingFallback };
}
