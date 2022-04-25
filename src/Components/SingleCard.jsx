import React from "react";
import VolcanoErupting from "../assets/volcano_erupting.png";



const SingleCard = (props) => {

  const handleClick = () => {
     props.choseCards(props.card)
  }

    return (
        <div  className="card"> 

            <div className={props.flipped ? "flipped" : ""}>
                <div style={{backgroundColor : props.color}} className="card-front" ></div> 

                <img 
                src={VolcanoErupting} 
                alt="volcano erupting" 
                className="card-back" 
                onClick={handleClick}
                /> 
            </div>
        </div>
    )
}

export default SingleCard;