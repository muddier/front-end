import React from "react";
import "../../styles/NavBar.scss";

function NavBar(props) {
  return (
    <div
      className=""
      style={{
        display: "flex",
        width: "78%",
        height: "auto",
        alignSelf: "flex-start",
        margin: "0 0 0 3%",
        padding: "15px 0"
      }}
    >
      <h5 style={{ flex: 1, textAlign: "center", textTransform: "capitalize" }}>
        <span>ROOM:</span> {props.currentRoom.title}
      </h5>
      <h5
        style={{
          flex: 2,
          textAlign: "start"
        }}
      >
        {props.currentRoom.description}
      </h5>
    </div>
  );
}

export default NavBar;
