
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQEwyTSBM4MhXDgdZDqOQ9mP1_3XAsyLo",
  authDomain: "chatty-e3b1b.firebaseapp.com",
  projectId: "chatty-e3b1b",
  storageBucket: "chatty-e3b1b.appspot.com",
  messagingSenderId: "852425289321",
  appId: "1:852425289321:web:f86a964ee79a4c09533cf8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);