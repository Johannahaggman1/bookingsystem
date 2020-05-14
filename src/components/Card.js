import React, {Component} from "react";
import firebase from "./FirebaseConfig";


class Card extends Component {

    onClickSaveToFirestore() {

       const docRef= firebase.firestore().collection("booking").doc(this.props.docId.toString());

/*        docRef.get()
       .then( booking =>console.log(booking.data())) */

       docRef.set({
           name: this.props.title,
           description: this.props.description,
           price: this.props.price

       })
    }

    render(){
    return (
    
        <div className={"card"} style={{width: "18rem"}}>
        <img src= {this.props.image} className={"card-img-top card-image"} alt={"..."}/>
        <div className={"card-body"}>
    <h5 className={"card-title"}>{this.props.title}</h5>
        <p className={"card-text"}>{this.props.description}</p>
        <button className={"btn btn-outline-success my-2 my-sm-0"} id={"btn-booking"}
         onClick= {this.onClickSaveToFirestore.bind(this)}>Boka</button>
        <button className={"btn btn-primary"}> {this.props.price}kr</button>
        </div>
        </div>

    )
}}

export default Card;