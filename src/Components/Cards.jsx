import React, {useState, useEffect} from "react";
import SingleCard from "./SingleCard";
import { data } from "./cardsData";

const Cards = (props) => {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // * SHUFFLE CARDS
    const shuffleCards = () => {
        const shuffledCards = [...data, ...data]
        .sort(()=> Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
  
         setCards(shuffledCards)
        
    }

    // * CHOOSE CARDS     
    const choseCards = (card) => {
        console.log(card);
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    
   

    return (
        <div>
            <button onClick={shuffleCards}>New Game</button>

            <div className="cards-container">
                {cards.map(card => (
                     <SingleCard 
                     key={card.id}
                     card={card}
                     color={card.color}
                     choseCards={choseCards}
                     />
                ))}
            </div>
        </div>
    )
}

export default Cards;