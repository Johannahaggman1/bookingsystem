//TEST

import React, { Component } from "react";
import axios from "axios";
import firebase from "./../FirebaseConfig";


class Bookings extends Component {
  state = {
    cards: [],
    chosenProduct: [],
    status: null,
    image: "",
    showBtn: true
  };

  async componentDidMount() {
    axios.get("http://localhost:1337/cards").then((res) => {
      this.setState({ cards: res.data });
    });
  }

  onClickGetBookings(){
  
    this.setState({ showBtn: false });
    const docRef= firebase.firestore().collection("booking").doc(firebase.auth().currentUser.uid.toString())

    docRef.get()
    .then ( booking => {
        if (booking.exists) {
            var getBooking = document.getElementById('myBookings')
            var btn_booking = document.getElementById('btn_booking')
            getBooking.querySelector(".title").innerHTML = booking.data().name;
            // getBooking.querySelector(".price").innerHTML = booking.data().price; 
            getBooking.querySelector(".description").innerHTML = booking.data().description; 
            console.log("Bokade:", booking.data())
            //btn_booking.remove()
        } else {
            console.log("error")
        }

        })  
}


              
  render() {
    return (

    <div className={"app_wrapper"}>
 
   <div className={"bookings_wrapper"} >
           {this.state.showBtn && (     
           <button id="btn_booking" className="btn btn-primary" onClick= {this.onClickGetBookings.bind(this)}>Visa bokningar</button>
           )}
              {!this.state.showBtn && (  
              <p className={"p-header"}>Dina Pass:</p>

            )}
            {!this.state.showBtn && ( <div className={"bookings_content"}>

                <div className={"booning-info myBookings"} id="myBookings">
                <p id="h1" className="title"></p>
                <hr />
                <p className="description"></p>  
                
                {/* <p className="price"></p>  */}
                
                    
                </div>

                <div className={"bookings_btn"}>
                <button className={"btn btn-outline-success my-2 my-sm-0"} id={"btn-booking"}>Boka om</button>
                <button className={"btn btn-primary"} id={"btn-cancel"}>Avboka</button>
                </div>

            </div> )}

            </div>
            


            </div>
    )
    }

}
  export default Bookings;
