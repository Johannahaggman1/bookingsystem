import React, {Component} from "react";
import Bookings from "../pages/Bookings";
import firebase from "./../FirebaseConfig";
import UserUpdate from "./../pages/UserUpdate";



//navigate("/userprofile")



class UserProfile extends Component{
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       firebase.auth().signOut();
    }
    //hämta data från firebase
    // profilbild8
    // radera kontot
    // finnas på databasen
    // raderar dem
    // fråga användare 
    // Varna användare ifall det finns bokingar 

    //edit på deras profile info

deleteAccount(){
    const userfromLocal = localStorage.getItem("user");
    console.log(userfromLocal);
    var user = firebase.auth().currentUser;
    console.log(user);

   user.delete().then(function() {
  // User deleted.
  localStorage.clear();
       window.location.reload(false);
}).catch(function(error) {
  // An error happened.
});

}
    render(){
        return(
            <div className="userPage_wrapper"> 
               

                <div className="userProfile-header">
                 <h1>Välkommen {this.props.userData}</h1>   

                <div className="userProfile-btns">
                  <button className="red-btn btn" onClick={this.deleteAccount.bind(this)}> Radera konto</button>
                 <button className="red-btn btn" onClick={this.logOut.bind(this)}> Logga ut</button>
                </div>

                </div>

                <UserUpdate/>
                 <Bookings/>
                
               

                 
            </div>
        )
    }
}


export default UserProfile;

