import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  // Powerful React Router Hook - when you click, browser has history so we are forcing a re-direct. Pushing next page into history
  const history = useHistory(); 

  //Using the Id, we change the URL which will render a different room
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  //Add Channel option. presents a prompt and stores the new channel into the databse to render
  const addChannel = () => {
    const channelName = prompt("Please enter the Channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  // Function that pulls Icons, titles, and hashtags for the Sidebar
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sideOption_hash"> # </span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
