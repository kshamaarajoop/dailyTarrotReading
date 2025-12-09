import {useState, useEffect} from 'react';
import {getDailyCard} from './getDailyCard';
export  default function useDailyTarot(){
    const [card, setCard] = useState(null);
    useEffect(()=>{
        const c= getDailyCard();
        setCard(c);
    },[]);
    return card;
}