import React from "react";

function SideBar(props) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Major Mono Display",
          fontSize: "24px",
          background: "purple",
          margin: "20px",
          borderRadius: "10px"
        }}
      >
        {props.currentRoom.name}
      </p>
      <p
        style={{
          flex: 1,
          textAlign: "center",
          textTransform: "capitalize",
          fontFamily: "Major Mono Display",
          fontSize: "20px",
          borderTop: "1px solid silver",
          borderBottom: "1px solid silver",
          padding: "10px 0"
        }}
      >
        {props.currentRoom.title}
      </p>
      <p style={{ color: "#F89500" }}>Players in the room:</p>
      <ul
        style={{
          listStyleType: "none",
          padding: "0 20px 0 30px"
        }}
      >
        {props.currentRoom.players.length > 0 ? (
          props.currentRoom.players.map((player, index) => {
            return <li key={index}>{player}</li>;
          })
        ) : (
          <li
            style={{
              textAlign: "start"
            }}
          >
            None
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
