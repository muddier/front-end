import React from "react";
import Pusher from 'pusher-js';
function NavBar(props) {

  Pusher.logToConsole = true;

  const pusher = new Pusher('0eed8913739ddced563b', {
    cluster: 'us2',
    forceTLS: true
  });

  let channel = pusher.subscribe('room-{}');
  channel.bind('broadcast', data => {
  alert(JSON.stringify(data));
  });

  return (
    <div
      className=""
      style={{
        display: "flex",
        height: "auto",
        padding: "15px 0",
        alignItems: "flex-end"
      }}
    >
      <h5
        style={{
          border: "5px solid #778678",
          borderRadius: "10px",
          width: "760px",
          fontFamily: "VT323",
          background: "#121D17",
          color: "#35A65A",
          textAlign: "start",
          padding: "5px 10px"
        }}
      >
        <span style={{ color: "silver" }}> >>> Incoming Message:</span>{" "}
        {props.currentRoom.description}
      </h5>
    </div>
  );
}

export default NavBar;
