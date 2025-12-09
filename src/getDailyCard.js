import tarotData from './assets/archive/tarot-images.json';
const safeParse = (v) => {
  try {
    return JSON.parse(v);
  } catch (e) {
    console.warn("safeParse failed:", e);
    return null;
  }
};

export function getDailyCard() {
  try {
    const cards = Array.isArray(tarotData?.cards) ? tarotData.cards : [];
    if (!cards.length) {
      console.error("No cards found in tarot.json");
      return null;
    }

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const raw = localStorage.getItem("dailyTarot");
    const saved = safeParse(raw);

    if (saved && saved.date === today && saved.card) {
      console.log("Using saved card for today:", saved.card.name || saved.card);
      return saved.card;
    }

    // Per-user random card
    const index = Math.floor(Math.random() * cards.length);
    const card = cards[index];

    localStorage.setItem("dailyTarot", JSON.stringify({ date: today, card }));
    console.log("Generated new daily card:", card.name || card);
    return card;
  } catch (err) {
    console.error("getDailyCard error:", err);
    return null;
  }
}