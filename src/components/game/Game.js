import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";
import Controls from "./Controls";
import SideBar from "./SideBar";
import Chat from './Chat';
import Stats from './Stats.js'
function Game() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [battleRes, setBattleRes] = useState('');

  useEffect(() => {
    // set the player in the intial room
    axiosWithAuth()
      // .get('http://localhost:8000/api/adv/init')
      .get("https://mudierthegame.herokuapp.com/api/adv/init")
      .then(res => {
        setCurrentRoom(res.data);
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
      })
      .then(res => {
        axiosWithAuth(res)
        .post("https://mudierthegame.herokuapp.com/api/adv/say/", {message: currentRoom.description} )
      })
      .catch(err => {
        return err
      });
  };

    const attackMonster = () => {
      let honeyGained = null;
      let xpGained = currentRoom.monster.xp;
      let playerWeight = currentRoom.xp
      let monsterWeight = currentRoom.monster.xp
      let roll = Math.random(playerWeight, monsterWeight)

      playerWeight- roll > monsterWeight - roll ?
      honeyGained = currentRoom.monster.honeyGained :      
      honeyGained = currentRoom.monster.honeyLost
      
      axiosWithAuth()
      .post("https://mudierthegame.herokuapp.com/api/adv/battle", {honeyGained, xpGained})  
      .then(res => setBattleRes(res.data))
      .catch(err => err)
      
    }
  console.log('GAME', currentRoom)
  console.log('BATTLERES', battleRes)
  if (!currentRoom.players) return <h1>Loading...</h1>;
  return (
    <main style={{ display: "flex", margin: "auto 0", justifyContent: "center" }}>
      <Stats charactersData={currentRoom} battleRes={battleRes} />
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
              attackMonster={attackMonster}
            />
          </div>
          <World currentRoom={currentRoom}/>
        </div>
        
      </div>
      <Chat roomId={currentRoom.roomId} charactersData={currentRoom}/>
      </main>
  );
}

export default Game;
