import React, {Component} from "react";
import firebase from "./FirebaseConfig";


class FirebaseTest extends Component {

    onClickFirebase() {
        const docRef = firebase.firestore().collection("booking").doc("info")

        docRef.get().then(booking => {
            if (booking.exists) {
                console.log("document exist", booking.data())
            } else {
                console.log("error")
            }
        })


        docRef.set({
            item: "test", 
            price: 2000
        })
    }

    render(){

        return (

            <div>
                <button onClick={this.onClickFirebase.bind(this)}>Hämta Firestore info</button>
            </div>
        )
    }

}

export default FirebaseTest;