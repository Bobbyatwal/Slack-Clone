import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import { useState, useEffect } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  /*Router = Page Routing. Used when we switch between channels w/o having to reload.
  RoomID parameter from the URL (defined in App.js) grabs the custom URL  */
 /* useState = Pass initial state to a function, & it returns variable w/current state value */
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  // RoomID is local so we provide DB with exact roomID through custom URL
  //Goes to DB room collection & grabs that exact roomID
  //Snapshot stores all its info. Dependency @ end changes everytime ID changes (ROOMID)
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  // console.log("Room Channel we are currently in:",roomDetails);
  // console.log("MESSAGES>>>", roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* We click a Channel, it changes to that particular RoomID, connects to DB, uses the UseParams(roomID) hook to fetch room details. Below is the Header Channel name: */}
            <strong> #{roomDetails?.name}</strong>
        {/* That ?. is called optional chaining. It's sort of like an instant try catch (in ES6) so the code won’t crash, it will just get overlooked. */}    
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
{/* Creates ability to message  in each Channel */ }
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
