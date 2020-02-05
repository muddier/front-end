import React from "react";

function SideBar(props) {
  return (
    <div>
      <p>{props.currentRoom.name}</p>
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
