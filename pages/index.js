import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState, useEffect } from "react";
import SignInPage from "./signIn"
import Channel from "../components/Channel"
import "../firebaseSettings.js" 
import Layout from "../components/Layout"
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
   <div>
      {user !== null ? (
         <Layout user={user} signOut={signOut}>
          <Channel user={user} db={db} />
        </Layout>
      ) : (
        <SignInPage signInWithGoogle={signInWithGoogle}/>
      )}
    </div>
  );
}
