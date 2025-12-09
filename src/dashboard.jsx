import useDailyTarot from "./useDailyTarot";
import CardDisplay from "./CardDisplay";
import CardMeaning from "./CardMeaning";
// DailyReading.jsx

// DailyReading.jsx

export default function DailyReading() {
  const card = useDailyTarot();

  if (!card) return <p>Loading…</p>;

  return (
    <div className="flex flex-col items-center gap-10">
      <CardDisplay card={card} />
      <CardMeaning card={card} />
    </div>
  );
}
