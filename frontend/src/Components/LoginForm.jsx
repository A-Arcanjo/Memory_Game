import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../App";

const LoginForm =  (props) => {
  const { setUserData } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const updateData = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value); 
        break;
      case "password":
        setPassword(event.target.value);
        break; 
      default:
        break;
    }
  };

  const loginPlayer = async (event) => {
    event.preventDefault();

    const loginData = {
      username: username,
      password: password
    }

    const settings = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "content-Type" : "application/json",
      }
    }

    const response = await fetch(
      "http://localhost:3001" + "/login",
      settings
    );
    const parsedRes = await response.json();


    try {
      if(response.ok) {
        props.setCurrentPlayerId(parsedRes.id);
        props.isLoggedIn(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message)
      setUsername("");
      setPassword("");
    }
  };
   

  return (
    <>
      <div>
        <div className="Login_container">
          <div className="form_container">
            <div className="heading_container">
              <h2>Login</h2>
            </div>
            <div className="newForm">
              <form onSubmit={loginPlayer}>
                <div>
                 <label>Username</label>
                 <input
                  name="username"
                  onChange={updateData}
                  value={username}
                 />
                 </div>
                 <div>
                  <label>Password</label>
                  <input name="password" onChange={updateData} value={password} />
                 </div>
                 <div className="button_container">
                  <button className="playButton" type="submit">
                    Login
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
