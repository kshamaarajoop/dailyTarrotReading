export default function CardMeaning({ card }) {
  return (
    <div className="flex flex-col items-center text-center mt-6 max-w-xl">

      {/* Section Title: Fortune */}
      <h2
        className="
          text-4xl
          font-bold 
          text-purple-300 
          tracking-wide 
          mb-3
          drop-shadow-[0_0_12px_rgba(200,150,255,0.6)]
        "
      >
        Fortune
      </h2>

      {/* Fortune List */}
      <ul className="space-y-3 text-purple-200/90 text-2xl leading-relaxed drop-shadow-sm">
        {card.fortune_telling?.map((line) => (
          <li key={line} className="flex items-start justify-center gap-3">
            <span className="text-purple-300 text-3xl">✦</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {/* Affirmation */}
      {card.Affirmation && (
        <>
          <h2 className="text-4xl font-bold text-purple-300 tracking-wide mt-10 mb-3 drop-shadow-[0_0_12px_rgba(200,150,255,0.6)]">
            Affirmation
          </h2>

          <p className="text-purple-200/90 text-3xl leading-relaxed drop-shadow-sm italic">
            ✦ "{card.Affirmation}"
          </p>
        </>
      )}

      {/* Light Meaning */}
      <h2 className="text-4xl font-bold text-purple-300 tracking-wide mt-10 mb-3 drop-shadow-[0_0_12px_rgba(200,150,255,0.6)]">
        Light Meaning
      </h2>

      <ul className="space-y-3 text-purple-200/90 text-2xl leading-relaxed drop-shadow-sm">
        {card.meanings?.light?.slice(0, 3).map((line, i) => (
          <li key={i} className="flex items-start justify-center gap-3">
            <span className="text-purple-300 text-3xl">✦</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {/* Shadow Meaning */}
      <h2 className="text-4xl font-bold text-purple-300 tracking-wide mt-10 mb-3 drop-shadow-[0_0_12px_rgba(200,150,255,0.6)]">
        Shadow Meaning
      </h2>

      <ul className="space-y-3 text-purple-200/90 text-2xl leading-relaxed drop-shadow-sm">
        {card.meanings?.shadow?.slice(0, 3).map((line, i) => (
          <li key={i} className="flex items-start justify-center gap-3">
            <span className="text-purple-300 text-3xl">✦</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
