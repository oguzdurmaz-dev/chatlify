import firebase from "firebase/app";
import Message from "./Message";
import styles from "../styles/Channel.module.css"
import { useState, useEffect ,useRef} from "react";

import { FaRegPaperPlane } from "react-icons/fa";

export default function Channel({ user = null, db = null }) {
  
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;
  useEffect(() => {
    scrollToBottom();
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });
      return unsubscribe;
    }
  }, [db,messages]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      setNewMessage("");
    }
  };
  return (
    <>
      <div
        className={`overflow-auto px-1 py-1 ${styles.heightMatch}`}
       
        id="journal-scroll"
      >
        {messages.map((message) => (
          
            <Message key={message.id} user={user} {...message} />
        
        ))}
        <div className="" id="chatmsg">
          {" "}
        </div>
        <div ref={messagesEndRef} />
      </div>

      <form
        className="flex justify-between items-center p-1"
        onSubmit={handleOnSubmit} style={{'paddingTop': '15px'}}
      >
        <div className="relative w-full">
          <input autoComplete="off"
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            type="text"
            className="rounded-full pl-6 pr-12 py-2 w-full focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white"
            style={{ "fontSize": "11px" }}
            placeholder="Type a message..."
            id="typemsg"
          />{" "}
        </div>
        <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
          <button type="submit" disabled={!newMessage}>
            <FaRegPaperPlane />
          </button>
        </div>
      </form>
    </>
  );
}