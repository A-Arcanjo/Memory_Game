import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Register from "../Components/Register.js";

const RegisterPage = () => {
    const [currentplayerId, setCurrentPlayerId] = useState("");

    const navigate = useNavigate();

    // after the player created an account direct him to the game view
    const handleSubmit = () => {
        navigate("/cards", {replace:true})
    }

  return (
    <>
    <div>
      <Register setCurrentPlayerId={setCurrentPlayerId} isLoggedIn={handleSubmit}/>
    </div>
    </>
  );
};

export default RegisterPage;