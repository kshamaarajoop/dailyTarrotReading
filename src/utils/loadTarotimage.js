// utils/loadTarotImages.js

// Load ALL images inside archive/cards using Vite's import.meta.glob
export const tarotImages = import.meta.glob(
  "../assets/archive/cards/*",
  {
    eager: true,
    import: "default"
  }
);
