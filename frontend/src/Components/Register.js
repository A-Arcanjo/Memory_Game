import React, { useState, useContext} from "react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [profileImage, setProfileImage] = useState("");


  // UPDATE the input values
  const updateData = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmailAddress(event.target.value);
        break;
      case "profileImage":
        setProfileImage(event.target.value);
        break;
      default:
        break;
    }
  };
    
  //Submit Form
  const registerUser = async (event) => {
    event.preventDefault();


    // create new player
    const newPlayer = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      profileImage: profileImage,
    };

    // define the POST request
    const settings = {
      method: "POST",
      body: JSON.stringify(newPlayer),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // make a POST request
    const response = await fetch(
      "http://localhost:3001" + "/register",
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        props.setCurrentPlayerId(parsedRes.id);
        props.isLoggedIn(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="Login_container">
      <h2>Create an Account</h2>

      <form onSubmit={registerUser}>
        <div>
          <label>Username</label>
          <input name="username" onChange={updateData} value={username} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" onChange={updateData} value={password} />
        </div>
        <div>
          <label>First Name</label>
          <input name="firstName" onChange={updateData} value={firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" onChange={updateData} value={lastName} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" onChange={updateData} value={emailAddress} />
        </div>
        <div>
          <label>Upload a Profile Photo</label>
          <input
            type="file"
            name="profileImage"
            onChange={updateData}
            value={profileImage}
          />
        </div>
        <button>Create an account</button>
      </form>
    </div>
  );
};

export default Register;
