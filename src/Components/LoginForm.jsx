import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

const LoginForm = () => {
  const { setUserData } = useContext(LoginContext);
  const navigate = useNavigate();

  const [errorPlayerName, setErrorPlayerName] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [nameChanged, setPlayerNameChanged] = useState(false);

  const updateData = (event) => {
    switch (event.target.name) {
      case "users_name":
        setErrorPlayerName("");
        setPlayerName(event.target.value);
        setPlayerNameChanged(true);
        break;

      default:
        break;
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (playerName.length === 0) {
      setErrorPlayerName("Please enter your name");
    } else {
      setErrorPlayerName("");
    }

    if (playerName.length > 0) {
      setUserData({ playerName: playerName });
      navigate("/cards");

      setPlayerNameChanged(false);
    }
  };
  return (
    <>
      <div>
        <div className="Login_container">
          <div className="form_container">
            <div className="heading_container">
              <h2>Enter your name</h2>
            </div>
            <div className="newForm">
              <form onSubmit={submitForm}>
                <label />
                <label htmlFor="users_name">Name</label>
                <input
                  id="users_name"
                  name="users_name"
                  onChange={updateData}
                  value={playerName}
                />

                <p className="errorVisible">{errorPlayerName || ""}</p>

                <div className="button_container">
                  <button className="playButton" type="submit">
                    Play
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
