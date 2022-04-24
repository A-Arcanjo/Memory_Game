
import React, {useState, useEffect, useContext} from "react";
import { ScoreContext } from "../App";
import SingleCard from "./SingleCard";
import { data } from "./cardsData";

const Cards = (props) => {
    //const { userData } = useContext(ScoreContext);
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
            <div className="container_load">
                <div className="form_container">
                    <div className="heading_container">
                        <h2>Player: </h2>
                        {/* {userData.playerName} */}
                    </div>
          <div className="button_container">
            <button onClick={shuffleCards}>Load Cards</button>
          </div>
        <div>
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
        </div>
        </div>
    </div>
    )
}

export default Cards;
