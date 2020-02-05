import React from "react";
import Player from "./Player";
import Map from "./Map";

function World() {
  return (
    <div
      style={{
        position: "relative",
        margin: "20px"
      }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;
