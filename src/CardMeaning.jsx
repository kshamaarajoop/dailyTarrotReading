export default function CardMeaning({ card }) {
  return (
    <div className="flex flex-col items-center text-center mt-6 max-w-xl">

      {/* Section Title: Fortune */}
      <h2
        className="
          text-2xl 
          font-bold 
          text-purple-300 
          tracking-wide 
          mb-3
          drop-shadow-[0_0_10px_rgba(200,150,255,0.5)]
        "
      >
        Fortune
      </h2>

      {/* Fortune List */}
      <ul className="space-y-2 text-purple-200/85 text-lg leading-relaxed drop-shadow-sm">
        {card.fortune_telling.map((line) => (
          <li key={line} className="flex items-start justify-center gap-2">
            <span className="text-purple-300">✦</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {/* Section Title: Light Meaning */}
      <h2
        className="
          text-2xl 
          font-bold 
          text-purple-300 
          tracking-wide 
          mt-10 mb-3
          drop-shadow-[0_0_10px_rgba(200,150,255,0.5)]
        "
      >
        Light Meaning
      </h2>

      {/* Light Meaning List */}
      <ul className="space-y-2 text-purple-200/85 text-lg leading-relaxed drop-shadow-sm">
        {card.fortune_telling.map((line) => (
          <li key={line} className="flex items-start justify-center gap-2">
            <span className="text-purple-300">✦</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
