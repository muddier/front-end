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
      // .get('http://localhost:8000/api/adv/init')
      .get("https://mudierthegame.herokuapp.com/api/adv/init")
      .then(res => {
        setCurrentRoom(res.data);
        setNextRooms(res.data.nextRooms);
      })
      .catch(err => {
        return err
      });
  }, []);

  const moveRooms = (e, direction) => {
    e.preventDefault();
    axiosWithAuth()
      // .post('http://localhost:8000/api/adv/move', {
      //   direction
      // })
      .post("https://mudierthegame.herokuapp.com/api/adv/move", {
        direction
      })
      .then(res => {
        setCurrentRoom(res.data);
        setMoveErrMsg(res.data.error_msg);
        setNextRooms(res.data.nextRooms);
      })
      .catch(err => {
        return err
      });
  };
  if (!currentRoom.players) return <h1>Loading...</h1>;
  return (
    <main style={{ display: "flex", margin: "auto 0", justifyContent: "center" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "1rem"
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
            width: '200px',
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
        <World currentRoom={currentRoom}/>
      </div>
      <NavBar currentRoom={currentRoom} />
      
    </div>
    <Chat roomId={currentRoom.roomId}/>
    </main>
        );
}

export default Game;
