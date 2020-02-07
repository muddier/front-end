import React from "react";
import spaceBear from '../../assets/spacesuit_bear.png';
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
        left: "49%",
        top: "49%",
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img 
      src={spaceBear}
      alt="space bear"
      />
    </div>
  );
}

export default Player;
