import React, {Component} from "react";
import firebase from "./../FirebaseConfig";

class Contact extends Component{

    state={
        condition: true,
        user:""
    }


onSubmitForm(e){
    e.preventDefault();

    const db = firebase.firestore();
    const loggedIn = firebase.auth().currentUser.uid;
    if (!loggedIn) {
        console.log("please log in first")
    } else {
        db.collection("contact")
        .doc(firebase.auth().currentUser.uid.toString())
        .set({
            username : e.target.elements.username.value,
            email : e.target.elements.email.value,
            message : e.target.elements.message.value
        })

        console.log("Message sent")
    }
}
    render(){
        return(
               <div className="contact_wrapper">
               
               <div className="contactForm_wrapper">    
                  <h3>Hör av dig vettja!</h3> 
                    <form onSubmit={this.onSubmitForm.bind(this)}>
                        <input type="text" placeholder="Användarnamn" name="username" />
                        <input type="email" placeholder="Email" name="email" />
                        <textarea placeholder="Skriv nått kul..." rows="6" cols="40" name="message"/>
                        <br />    
                        <button className="btn btn-primary">Skicka!</button>
                    </form>
                    </div>
               </div>
        )
    }
}

export default Contact;