import { tarotImages } from "./utils/loadTarotimage";

export default function CardDisplay({ card }) {

  const imageEntry = Object.entries(tarotImages).find(([path]) =>
    path.includes(card.img)
  );
  const imgSrc = imageEntry ? imageEntry[1] : "";

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Tarot Card Display */}
      <div
        className="
          relative w-64 h-[380px]
          rounded-xl overflow-hidden
          bg-[#2a0040]/40
          backdrop-blur-md
          shadow-[0_0_40px_rgba(200,120,255,0.55)]
          border border-purple-400/40
        "
      >
        <img
          src={imgSrc}
          alt={card.name}
          className="w-full h-full object-cover"
        />

        {/* Mystic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45" />
      </div>

      {/* Card Title */}
      <h2
        className="
          text-4xl 
          font-extrabold 
          mt-5 
          text-purple-200 
          tracking-wide
          drop-shadow-[0_0_12px_rgba(200,120,255,0.7)]
        "
      >
        {card.name}
      </h2>

      {/* Card Arcana */}
      <p
        className="
          text-purple-300 
          uppercase 
          text-sm 
          tracking-[0.35em]
          drop-shadow-[0_0_6px_rgba(180,100,255,0.4)]
          mt-1
        "
      >
        {card.arcana}
      </p>
    </div>
  );
}
