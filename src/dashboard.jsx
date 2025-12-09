import useDailyTarot from "./useDailyTarot";
import CardDisplay from "./CardDisplay";
import CardMeaning from "./CardMeaning";
// DailyReading.jsx

// DailyReading.jsx


export default function DailyReading() {
  const { card, loading, error } = useDailyTarot();

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return (
    <div className="p-6 text-center text-red-300">
      <p>Error: {error}</p>
      <p>Open DevTools (F12) and check console for details.</p>
    </div>
  );
  if (!card) return <p className="p-6 text-center">No card available.</p>;

  return (
    <div className="reading-container flex flex-col items-center gap-6">
      <CardDisplay card={card} />
      <CardMeaning card={card} />
    </div>
  );
}