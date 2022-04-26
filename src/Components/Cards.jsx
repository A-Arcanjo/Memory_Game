import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../App";
import SingleCard from "./SingleCard";
import { data } from "./cardsData";

//*GIORGIO

const Cards = (props) => {
  const { userData } = useContext(LoginContext);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [count, setCount] = useState(0);

  // * SHUFFLE CARDS
  const shuffleCards = () => {
    const shuffledCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  // * CHOOSE CARDS
  const choseCards = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // * MATCH CARDS
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((previousCards) => {
          return previousCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => reset(), 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //* RESET CHOICES
  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  console.log(cards);
  //*GIORGIO

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="container_load">
        <div className="form_container">
          <div className="heading_container">
            <h2>Player: {userData.playerName} </h2>
          </div>

          <div className="button_container">
            <button onClick={shuffleCards}>Load Cards</button>
          </div>
          <div>
            <div className="cards-container">
              {/* // * Generate Cards */}
              {cards.map((card) => (
                <SingleCard
                  key={card.id}
                  src={card.src}
                  card={card}
                  choseCards={choseCards}
                  flipped={
                    card === choiceOne || card === choiceTwo || card.matched
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
