import React from "react";

function SideBar(props) {
  return (
    <div>
      <p style={{ fontFamily: "Major Mono Display", fontSize: "24px" }}>
        {props.currentRoom.name}
      </p>
      <p
        style={{
          flex: 1,
          textAlign: "center",
          textTransform: "capitalize",
          fontFamily: "Major Mono Display",
          fontSize: "20px"
        }}
      >
        <div>Room:</div>
        {props.currentRoom.title}
      </p>
      <p>Players in the room:</p>
      <ul
        style={{
          listStyleType: "none",
          fontSize: "24px"
        }}
      >
        {props.currentRoom.players.map((player, index) => {
          return <li key={index}>{player}</li>;
        })}
      </ul>
    </div>
  );
}

export default SideBar;
