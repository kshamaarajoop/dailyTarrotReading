import {useState, useEffect} from 'react';
import {getDailyCard} from './getDailyCard';

export default function useDailyTarot() {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const c = getDailyCard();
      if (!c) {
        setError("No card available (check tarot.json).");
      }
      setCard(c);
    } catch (e) {
      console.error("useDailyTarot error:", e);
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  return { card, loading, error };
}