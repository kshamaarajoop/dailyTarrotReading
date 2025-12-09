import tarot from './assets/archive/tarot-images.json';
function seededRandom(seed) {
    let h=0;
    for(let i=0;i<seed.length;i++){
        h= Math.imul(31,h) + seed.charCodeAt(i) | 0;
    }
    return Math.abs(h)%tarot.cards.length;
}
export function getDailyCard(){
    const today =  new Date().toISOString().slice(0,10);
    const saved = JSON.parse(localStorage.getItem("dailyTarot"));
    if(saved && saved.date === today){
        return saved.card;
    }
    const index= seededRandom(today);
    const card = tarot.cards[index];
    localStorage.setItem("dailyTarot", JSON.stringify({date: today, card}));
    return card;

}