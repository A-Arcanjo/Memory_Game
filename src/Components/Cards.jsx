import React, { useState, useEffect, useContext } from "react";
import { ScoreContext } from "../App";
import SingleCard from "./SingleCard";
import { data } from "./cardsData";

//*GIORGIO

const Cards = (props) => {
  const [count, setCount] = useState(0);

  const { userData } = useContext(ScoreContext);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
      if (choiceOne.color === choiceTwo.color) {
        setCards((previousCards) => {
          return previousCards.map((card) => {
            if (card.color === choiceOne.color) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setChoiceOne(null);
        setChoiceTwo(null);
      } else {
        setChoiceOne(null);
        setChoiceTwo(null);
      }
    }
  }, [choiceOne, choiceTwo]);

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
            <h2>Player: {userData.playerName}</h2>
          </div>

          <div className="button_container">
            <button onClick={shuffleCards}>Load Cards</button>
          </div>
          <div>
            <div className="cards-container">
              {cards.map((card) => (
                <SingleCard
                  updateCount={updateCount}
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
  );
};

export default Cards;
