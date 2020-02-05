import React from "react";

function Player() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        width: "40px",
        margin: "5px",
        position: "absolute",
        bottom: "0",
        left: "0"
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          background: "red",
          height: "20px",
          width: "20px"
        }}
      />
    </div>
  );
}

export default Player;
