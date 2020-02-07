import React from "react";

function SideBar(props) {
  console.log('SIDEBAR PROPS', props)
  return (
    <div style={{ background: "#000", borderRadius: "0 10px 0 0" }}>
      {/* <p
        style={{
          fontFamily: "Major Mono Display",
          fontSize: "1.3rem",
          background: "purple",
          margin: "20px",
          padding: "10px",
          borderRadius: "10px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflowX: "hidden"    
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
        paddingTop: "5px"
      }}
      >
      XP: {props.currentRoom.xp}
      </p>
      <p
      style={{
        flex: 1,
        textAlign: "center",
        textTransform: "capitalize",
        fontFamily: "Major Mono Display",
        fontSize: "20px",
        borderBottom: "1px solid silver",
        paddingBottom:"5px"
      }}
      >
      Honey: {props.currentRoom.honey}
      </p> */}
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
