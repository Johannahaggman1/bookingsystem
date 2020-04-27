import React from "react";



const Card = (props) => {

    return (
    
        <div className={"card"} style={{width: "18rem"}}>
        <img src= {props.image} className={"card-img-top card-image"} alt={"..."}/>
        <div className={"card-body"}>
    <h5 className={"card-title"}>{props.title}</h5>
        <p className={"card-text"}>{props.description}</p>
        <button className={"btn btn-outline-success my-2 my-sm-0"} id={"btn-booking"}>Boka</button>
        <button className={"btn btn-primary"}>{props.price}kr</button>
        </div>
        </div>

    )
}

export default Card;