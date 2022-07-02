import React from "react";
import { Link } from "react-router-dom";
import logo_3_removeBg from "../assets/logo_3_removeBg.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo_3_removeBg} alt="" className="img_logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
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
