import React, {useState} from "react";
import VolcanoErupting from "../assets/volcano_erupting.png"
import { data } from "./cardsData";

const Cards = () => {
    const [cards, setCards] = useState([]);

    // SHUFFLE CARDS
    const shuffleCards = () => {
        const shuffledCards = [...data, ...data]
          .sort(()=> Math.random() - 0.5)
          .map((card) => ({ ...card, id: Math.random() }));
  
         setCards(shuffledCards) 
    }


    console.log(cards);
    return (
        <div>
            <button onClick={shuffleCards}>START</button>
            <div className="cards-container">
        
                {cards.map(card => (
                     <div  className="card" key={card.id} > 
                      <div>
                        <div style={{backgroundColor : card.color}} className="card-front"></div>
                        <img src={VolcanoErupting} alt="volcano erupting" className="card-back"/> 
                      </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Cards;