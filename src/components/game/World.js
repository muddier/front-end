import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import Player from "./Player";
import Map from "./Map";

function World({currentRoom}) {
  axiosWithAuth()
  .post("https://mudierthegame.herokuapp.com/api/adv/say/", {message: currentRoom.description} )
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
