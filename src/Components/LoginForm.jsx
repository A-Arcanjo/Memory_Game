import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../App";
// import dinoLogo from "../assets/dinoLogo.jpg";

const LoginForm = () => {
  const { setUserData } = useContext(ScoreContext);
  const navigate = useNavigate();
  /* const [scores, setScores] = useState(0); */
  const [errorPlayerName, setErrorPlayerName] = useState("");
  // const [errorPlayerEmail, setErrorPlayerEmail] = useState("");
  // const localData = localStorage.getItem("scores");
  //localData ? JSON.parse(localData) : [];
  const [playerName, setPlayerName] = useState("");
  const [nameChanged, setPlayerNameChanged] = useState(false);
  // const [email, setEmail] = useState("");
  // const [emailChanged, setEmailChanged] = useState(false);
  const emailErrorDiv = React.createRef();

  // const score1 = useContext(ScoreContext);

  // When the user updates one of the form elements, check its "name"
  // And then update the correct state variable with the new value
  // Now we can update all the state variables correctly using just one function!

  /* useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]); */

  const updateData = (event) => {
    switch (event.target.name) {
      case "users_name":
        setErrorPlayerName("");
        setPlayerName(event.target.value);
        setPlayerNameChanged(true);
        break;
      // case "email":
      //   setErrorPlayerEmail("");
      //   setEmail(event.target.value);
      //   setEmailChanged(true);
      //   break;
      default:
        break;
    }
  };

  // const checkEmail = () => {
  //   let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  //   if (validate.test(email)) {
  //     emailErrorDiv.current.className = "errorInvisible";
  //   } else {
  //     emailErrorDiv.current.className = "errorVisible";
  //   }
  // };

  // Handle the form being submitted
  const submitForm = (event) => {
    event.preventDefault();

    if (playerName.length === 0) {
      setErrorPlayerName("Please enter your name");
    } else {
      setErrorPlayerName("");
    }

    // if (email.length === 0) {
    //   setErrorPlayerEmail("Please enter your email");
    // } else if (/^[a-zA-Z0-9]+@[0-9]+\.[A-Za-z]+$/.test(email) === false) {
    //   setErrorPlayerEmail("Please enter your email in a correct format");
    // } else {
    //   setErrorPlayerEmail("");
    // }

    if (
      playerName.length > 0 /* &&
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) */
    ) {
      /* const userData = {
        playerName: playerName,
        email: email,
      }; */
      setUserData({ playerName: playerName });
      navigate("/cards");
      /*  const settings = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/JSON",
        },
      }; */

      /* fetch("https://jsonplaceholder.typicode.com/users", settings)
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server", data);
        }); */

      setPlayerName(""); // Reset the value of the "name" state variable / input element
      setPlayerNameChanged(false);
      // setEmail(""); // Etc
      // setEmailChanged(false);

      // ELSE, do not submit the form if one or more checks fail
      // Instead, give the user an alert for each failed calert    } else {
    }
  };
  return (
    <>
      {/* <div className="logo">
        <img src={dinoLogo} alt="Logo" className="img_logo" />
      </div> */}
      <div>
        <div className="Login_container">
          <div className="form_container">
            <div className="heading_container">
              <h2>Enter your name</h2>
            </div>
            <div className="newForm">
              <form onSubmit={submitForm}>
                <label /> {/* onBlur={checkNameOnBlur} */}
                {/* <div
                className={
                  nameChanged && playerName.trim === 0
                    ? "errorVisible"
                    : "errorInvisible"
                }
              >
                Please enter your name
              </div> */}
                {/* <p>Score: {scores}</p> */}
                <label htmlFor="users_name">Name</label>
                <input
                  id="users_name"
                  name="users_name"
                  onChange={updateData}
                  value={playerName}
                />
                {/* onBlur={checkNameOnBlur} */}
                {/* <div
                className={
                  nameChanged && playerName.trim === 0
                    ? "errorVisible"
                    : "errorInvisible"
                }
              >
                Please enter your name
              </div> */}
                <p className="errorVisible">{errorPlayerName || ""}</p>
                {/*ref={nameErrorDiv}*/}
                {/* <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                onChange={updateData}
                onBlur={checkEmail}
                value={email}
              />
              <p className="errorVisible">{errorPlayerEmail || ""}</p> */}
                {/* <div
                className={
                  email.length === 0 && emailChanged === true
                    ? "errorVisible"
                    : "errorInvisible"
                }
              >
                Please enter your email
              </div> */}
                {/* <div className="errorInvisible" ref={emailErrorDiv}>
                Incorrect format
              </div> */}
                <div className="button_container">
                  <button type="submit">Play</button>
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
