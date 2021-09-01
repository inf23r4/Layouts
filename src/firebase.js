import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtIA8lju8-e7C8sW2pMP7cfTHqcj9IHpw",
    authDomain: "archivo-58517.firebaseapp.com",
    projectId: "archivo-58517",
    storageBucket: "archivo-58517.appspot.com",
    messagingSenderId: "108882670131",
    appId: "1:108882670131:web:b1221299779cd48e5c6946",
    measurementId: "G-HTL0Z9CSLC"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 export { db, firebase as default };