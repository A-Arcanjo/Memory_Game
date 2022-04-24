import React from "react";
import { Link } from "react-router-dom";
import dinoLogo from "../assets/dinoLogo.jpg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={dinoLogo} alt="" /> 
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/score">SCORE</Link>
          </li>
          <li>
            <Link to="/discover">DISCOVER</Link>
          </li>
          <li>
            <Link to="/info">INFO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
