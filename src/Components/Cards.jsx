
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
    
    // * MATCH CARDS
    useEffect(()=>{
    if(choiceOne && choiceTwo){
        if(choiceOne.color === choiceTwo.color){
            setCards(previousCards => {
                return previousCards.map(card => {
                    if(card.color === choiceOne.color) {
                        return {...card, matched:true}
                    } else {
                        return card
                    }
                })
            })
             reset()
        } else {
          setTimeout( () => 
          reset(), 2000) }                    
    } 
},[choiceOne, choiceTwo])

    //* RESET CHOICES 
    const reset = () => {
        setChoiceOne(null)
        setChoiceTwo(null) 
    }


 console.log(cards);
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
                {/* // * Generate Cards */} 
                {cards.map(card => (
                     <SingleCard 
                     key={card.id}
                     card={card}
                     color={card.color}
                     choseCards={choseCards}
                     flipped={card === choiceOne || card === choiceTwo || card.matched}
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
