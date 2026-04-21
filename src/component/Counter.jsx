// src/hooks/useVisitorCount.js
import { useEffect, useState } from "react";

const NAMESPACE = "your-site-name";
const KEY = "visits";

export function counter() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const res = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setCount(data.value);

      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch visitor count:", err);
      } finally {
        setLoading(false); // always runs, success or fail
      }
    };

    trackVisit();
  }, []);

  return { count, loading, error };
}