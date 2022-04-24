import React, { useState, useContext } from "react";
import { ScoreContext } from "../App";



const HighScores = () => {
  const [scoreState, setScoreState] = useState("");
  const [name, setName] = useState("");
  const [nameChanged, setNameChanged] = useState(false);
  const [email, setEmail] = useState("");
  const [emailChanged, setEmailChanged] = useState(false);

  const emailErrorDiv = React.createRef();

  const score = useContext(ScoreContext);

  // When the user updates one of the form elements, check its "name"
  // And then update the correct state variable with the new value
  // Now we can update all the state variables correctly using just one function!

  const updateData = (event) => {
    switch (event.target.name) {
      case "users_name":
        setName(event.target.value);
        setNameChanged(true);
        break;
      case "email":
        setEmail(event.target.value);
        setEmailChanged(true);
        break;
      default:
        break;
    }
  };

  /*{
    
    const checkNameOnBlur = () => {
        if (name.trim().length === 0) {
            nameErrorDiv.current.style.display = "block";
        } else {
            nameErrorDiv.current.style.display = "none";
        }

    };

  }*/

  const checkEmail = () => {
    let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (validate.test(email)) {
      emailErrorDiv.current.className = "errorInvisible";
    } else {
      emailErrorDiv.current.className = "errorVisible";
    }
  };

  // Handle the form being submitted
  const submitForm = (event) => {
    event.preventDefault();

    // * Option 1: log all the user data from the form to the console

    // console.log("Name", name);
    // console.log("Age", age);
    // console.log("Email", email);
    // console.log("Comment", comment);
    // console.log("Gender", gender);

    // * Option 2: use fetch to POST the user's data to a server, and log the server's response

    if (
      name.length > 0 &&
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    ) {
      const userData = {
        name: name,
        email: email,
      };

      const settings = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/JSON",
        },
      };

      fetch("https://jsonplaceholder.typicode.com/users", settings)
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server", data);
        });

      setName(""); // Reset the value of the "name" state variable / input element
      setNameChanged(false);
      setEmail(""); // Etc
      setEmailChanged(false);
      // ELSE, do not submit the form if one or more checks fail
      // Instead, give the user an alert for each failed check
    } else {
      if (name.length === 0) {
        alert("Please enter your name");
      }
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) === false) {
        alert("Please enter your email in a correct format");
      }
    }
  };
  return (
    <div>
      <div className="container">
        <div className="form_container">
          <div className="heading_container">
            <h2>Scores</h2>
          </div>
          <div className="newForm">
            <form onSubmit={submitForm}>
              {/* 
                    Making the input a controlled component:

                    1. Give the input a "value" linked to the "name" state variable
                    2. However, now to change what the user can see in the input...
                    ... first we must update the STATE VARIABLE!
                    3. To do this, we must add an "onChange" event handler to the input
                    4. This calls a function which updates the STATE variable "name"
                    */}
              <label htmlFor="users_name">Name</label>
              <input
                id="users_name"
                name="users_name"
                onChange={updateData}
                value={name}
              />{" "}
              {/* onBlur={checkNameOnBlur} */}
              <div
                className={
                  nameChanged && name.trim === 0
                    ? "errorVisible"
                    : "errorInvisible"
                }
              >
                Please enter your name
              </div>{" "}
              {/*ref={nameErrorDiv}*/}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                onChange={updateData}
                onBlur={checkEmail}
                value={email}
              />
              <div
                className={
                  email.length === 0 && emailChanged === true
                    ? "errorVisible"
                    : "errorInvisible"
                }
              >
                Please enter your email
              </div>
              <div className="errorInvisible" ref={emailErrorDiv}>
                Incorrect format
              </div>
              <div className="button_container">
                <button type="submit" className="submit-button">Submit Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighScores;
