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
        left: "50%",
        top: "50%",
        transform: 'translate(-50%, -50%)'
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
