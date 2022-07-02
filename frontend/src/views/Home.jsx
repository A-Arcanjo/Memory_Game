import React from "react";
import { Link } from "react-router-dom";
import denver from "../assets/denver.gif";

const Home = () => {
    
    return (
        <>
        <div className="logo">
               <img className="gif_denver" src={denver} alt="Denver"></img>
        </div>
        <div className= "home-container">
            <div className="game-container">
               <Link to="/register">
                   <button className="playButton">Create an account</button>
               </Link>
                   
               <Link to="/login">
                   <button className="playButton">Login</button>  
               </Link> 
            </div>     
        </div>
      </>  
    )
}

export default Home;