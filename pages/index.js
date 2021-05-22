import styles from "../styles/Home.module.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState, useEffect } from "react";
import Button from "../components/Button"
import Channel from "../components/Channel"

firebase.initializeApp({
  apiKey: "AIzaSyCQEwyTSBM4MhXDgdZDqOQ9mP1_3XAsyLo",
  authDomain: "chatty-e3b1b.firebaseapp.com",
  projectId: "chatty-e3b1b",
  storageBucket: "chatty-e3b1b.appspot.com",
  messagingSenderId: "852425289321",
  appId: "1:852425289321:web:f86a964ee79a4c09533cf8",
});
const auth = firebase.auth();
const db = firebase.firestore();
export default function Home() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      {user !== null ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <Channel user={user} db={db} />
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
}
