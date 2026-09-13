import { useEffect, useState } from 'react';

/**
 * Fetches the events list from the site's own /api/events endpoint, which
 * reads a Google Sheet (Event, Date, Time, Location columns) through the
 * shared service account. Returns an empty array while loading or on
 * error so callers can degrade gracefully (e.g. show a "coming soon"
 * placeholder) instead of crashing.
 */
export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/events')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setEvents(data);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load events:', err);
        setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { events, loading, error };
}
