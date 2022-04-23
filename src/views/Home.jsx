import React from "react";
import Header from "../components"

const Home = () => {
    return (
        <div className= "home-container">
               <Header/>
               <div className="game-container">
                   <button>START</button>
               </div>     
        </div>
    )
}

export default Home;