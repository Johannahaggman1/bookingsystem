import React, {Component} from "react";
//npm i react-firebaseui
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../FirebaseConfig";
import UserProfile from "./UserProfile";


class UserLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }

uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl:'/userprofile',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID, 
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
};

componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
       this.setState({user:user.email}) //user:user.email
       console.log(user);
    })
    //skicka data till parent
}
 
 onClickRegister(){
     this.setState({condition:false})
 }

 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();

const email= e.target.elements.email.value;
const password = e.target.elements.password.value;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(
        //res=>
    
    //anropa showDisplayName
     //this.props.userCredential(res.user.email)
     
     )
    
    //react-router 
    //navigate 
    // skydda routerna 
    
}
// reset password 
// mail och mailer reset länk och mall till användare 


 onSubmitRegister(e){
   
     const email= e.target.elements.email.value;
     const password= e.target.elements.password.value;
     const displayName = e.target.elements.username.value;
      e.preventDefault();

     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then( (res)=>{

// från child till parent med hjälp callback funktion 
         res.user.sendEmailVerification()
        // this.props.userCredential(res.user.email)
        // this.props.showDisplayName(displayName)
     })
     //.then(()=>{
     /*      firebase.auth().onAuthStateChanged((user)=>{
            user.updateProfile({
         displayName :username
     })
  console.log("display name"+ this.state.displayName)}) */
    // })

 // aktivera verifering av email
 
 }


 resetPassword(e){
     var auth = firebase.auth();
var emailAddress = e.target.elements.resetEmail.value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log("email sent")
})
e.preventDefault();
 }

 /* componentDidMount(){
     firebase.auth().onAuthStateChanged((user)=>{
                            user.updateProfile({
                                displayName :username
                            }))
 }
 } */


    render(){
        // Configure FirebaseUI.

        return(
            <div className="userLogin_wrapper">
         {this.state.condition  && 
         <div>
            <h2>Logga in</h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email"   name="email"/>
                    <input type="password" name="password" />
                    <button className="btn">Logga in</button>  
                </form>   

                <h3>Inte medlem än? </h3>
               
                 </div>
                
                }
                
               
           {!this.state.condition &&

           <div>
               <h2>Registrera</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <input type="text" name="username"/>
                     <input type="email" name="email" />
                     <input type="password" name="password" />

                    <button className="btn">Registrera</button>

                </form>
            <div> Eller</div>
     <div>
        <h1>Min App</h1>
        <p>Logga in:</p>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>

           {this.state.user? <UserProfile userData={this.state.user} /> : <div> </div>}


                </div>
                
                }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
{/* <button onClick={this.onClickLogin.bind(this)}>Logga in</button> */}
<button className="btn" onClick={this.onClickRegister.bind(this)}>Registrera dig </button>

            <form className="resetpas-form" onSubmit={this.resetPassword.bind(this)}>
                 <input type="email" name="resetEmail" placeholder="Lösenord"></input>
                 <button className="btn" >Återställ lösenord </button>
            </form>
                

            </div>
        )
    }
}

export default UserLogin;