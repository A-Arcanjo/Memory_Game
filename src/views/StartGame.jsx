import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import denver from "../assets/denver.gif";

const StartGame = () => {
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    navigate("/login");
  };

  return (
    <>
      <div className="logo">
        <Link to="/">
          <img className="gif_denver" src={denver} alt="Denver"></img>
        </Link>
      </div>

      <LoginPage />
      {/* <form onSubmit={submitForm}>
        <div className="button_startContainer">
          <button className="buttonStart" type="submit">
            START
          </button>
        </div>
      </form> */}
    </>
  );
};

export default StartGame;
