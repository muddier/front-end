import React from "react";
import Player from "./Player";
import Map from "./Map";

function World({currentRoom}) {
  return (
    
    <div
      style={{
        position: "relative",
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <Map currentRoom={currentRoom}/>
      <Player />
    </div>
  );
}

export default World;
