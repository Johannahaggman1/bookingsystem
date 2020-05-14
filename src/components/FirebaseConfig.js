import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFNNo_Nc_QJBor2qSBexsjP6g4qo36zuI",
    authDomain: "klassprojekt-cb1ac.firebaseapp.com",
    databaseURL: "https://klassprojekt-cb1ac.firebaseio.com",
    projectId: "klassprojekt-cb1ac",
    storageBucket: "klassprojekt-cb1ac.appspot.com",
    messagingSenderId: "750686729916",
    appId: "1:750686729916:web:4d83038101f35be2e282b9",
    measurementId: "G-XFG4SD3HHM"
  };

  firebase.initializeApp(firebaseConfig);

  //firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase;