import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";
import Controls from "./Controls";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Chat from './Chat';

function Game() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [moveErrMsg, setMoveErrMsg] = useState("");
  const [nextRooms, setNextRooms] = useState([]);

  useEffect(() => {
    // set the player in the intial room
    axiosWithAuth()
      .get("https://mudierthegame.herokuapp.com/api/adv/init")
      .then(res => {
        console.log("Response: ", res);
        setCurrentRoom(res.data);
        setNextRooms(res.data.nextRooms);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  const moveRooms = (e, direction) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://mudierthegame.herokuapp.com/api/adv/move", {
        direction
      })
      .then(res => {
        console.log(res);
        setCurrentRoom(res.data);
        setMoveErrMsg(res.data.error_msg);
        setNextRooms(res.data.nextRooms);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  if (!currentRoom.players) return <h1>Loading...</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "65%",
        minWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          margin: "10px",
          border: "1px solid silver",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#000",
            borderRadius: "0 10px 10px 0"
          }}
        >
          <SideBar currentRoom={currentRoom} />
          <Controls
            moveRooms={moveRooms}
            nextRooms={nextRooms}
            moveErrMsg={moveErrMsg}
          />
        </div>
        <World />
      </div>
      <NavBar currentRoom={currentRoom} />
      <Chat roomId={currentRoom.roomId}/>
    </div>
  );
}

export default Game;
