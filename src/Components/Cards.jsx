import React, { useContext, useState } from "react";
import { ScoreContext } from "../App";
import VolcanoErupting from "../assets/volcano_erupting.png";
import { data } from "./cardsData";

const Cards = () => {
  const { userData } = useContext(ScoreContext);
  const [cards, setCards] = useState([]);

  // SHUFFLE CARDS
  const shuffleCards = () => {
    const shuffledCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  console.log(cards);
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
          <div className="cards-container">
            {cards.map((card) => (
              <div className="card" key={card.id}>
                <div>
                  <div
                    style={{ backgroundColor: card.color }}
                    className="card-front"
                  ></div>
                  <img
                    src={VolcanoErupting}
                    alt="volcano erupting"
                    className="card-back"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
