import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  const [currentplayerId, setCurrentPlayerId] = useState("");

    const navigate = useNavigate();

    // after the player created an account direct him to the game view
    const handleSubmit = () => {
        navigate("/cards", {replace:true})
    }
  return (
    <>
    <div>
      <LoginForm setCurrentPlayerId={setCurrentPlayerId} isLoggedIn={handleSubmit}/> 
    </div>
    </>
  );
};

export default LoginPage;
