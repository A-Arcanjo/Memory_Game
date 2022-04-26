import React from "react";
import { Link } from "react-router-dom";
import info_to_flip from "../assets/info_to_flip.gif";

const Info = () => {
  return (
    <>
      <div className="infos">
        <div className="logo_info">
          <Link to="/info">
            <img className="info" src={info_to_flip} alt="info"></img>
          </Link>
        </div>
        <div className="info-container">
          <h2>How to Play Memory</h2>
          <h4>Players</h4>
          <p>One single player</p>
          <h4>Setup</h4>
          <p>Match the different cards to reveal the picture underneath!</p>
          <h4>Goal</h4>
          <p>
            Click on a card to flip it over, then click on another card.
            <br /> If they match, those cards will stay visible.
            <br /> If they don't, they'll flip around and you'll have to try
            again.
            <br /> Keep going until all of the cards have been revealed!
          </p>
          <h4>Scoring</h4>
          <p>Complete each habitat to reveal a special bonus!</p>
        </div>
      </div>
    </>
  );
};

export default Info;
