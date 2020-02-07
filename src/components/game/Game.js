import React, { useState, useEffect, useRef } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";
import Controls from "./Controls";
import SideBar from "./SideBar";
import Chat from './Chat';
import Actions from './Actions';

function Game() {
  const [currentRoom, setCurrentRoom] = useState({});

  useEffect(() => {
    // set the player in the intial room
    axiosWithAuth()
      // .get('http://localhost:8000/api/adv/init')
      .get("https://mudierthegame.herokuapp.com/api/adv/init")
      .then(res => {
        console.log("Response: ", res);
        setCurrentRoom(res.data);
      })
      .catch(err => {
        console.log(err.response);
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
        console.log(res);
        setCurrentRoom(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const teleport = () => {
    axiosWithAuth()
      // .post('http://localhost:8000/api/adv/teleport')
      .post("https://mudierthegame.herokuapp.com/api/adv/teleport")
      .then(res => {
        console.log('Teleport Res', res);
        setCurrentRoom(res.data);
      })
      .catch(err => {
        alert(err.response.data.error_msg);
      });
  }

  const xpBoost = (xpBoost) => {
    axiosWithAuth()
      // .post('http://localhost:8000/api/adv/boost', xpBoost)
      .post("https://mudierthegame.herokuapp.com/api/adv/boost", xpBoost)
      .then(res => {
        console.log(res);
        // setCurrentRoom(res.data);
        // 
        // PUT SETTIMEOUT HERE to decrement the temporary boost
        // You can use (xpBoost.temp !== 0){ setTimeout(() => xp - xpBoost.xp)} 
      })
      // .catch(err => {
      //   console.log(err.response);
      // });
  }
  
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
              nextRooms={currentRoom.nextRooms}
              moveErrMsg={currentRoom.error_msg}
            />
          </div>
          <World currentRoom={currentRoom}/>
        </div>
        <Actions teleport={teleport} xpBoost={xpBoost} />
      </div>
      <Chat roomId={currentRoom.roomId}/>
      </main>
  );
}

export default Game;
