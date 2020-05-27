import React, { Component } from "react";
import firebase from "./../FirebaseConfig";

class UserUpdate extends Component {

    state = {
        condition: true,
        user: "",
        displayName: ""
    }

    

    onClickUpdateUser() {
       
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: "Jane Q. User",
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
    }



    render() {
        return (
            <div className="userUpdate_wrapper">
                <h2>Vill du skapa nytt användarnamn?</h2>
                <form>
                <input type="text"  name="displayName" placeholder="Nya namnet" />
                    <button id="btn_updateUsername" className="btn btn-primary" onClick={this.onClickUpdateUser.bind(this)}>Uppdatera</button>
                </form>
                
                
            </div>
        )
    }




}


export default UserUpdate;