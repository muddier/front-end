import React, { useState, useEffect, useRef } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";
import Controls from "./Controls";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Chat from './Chat';
import Stats from './Stats.js'
function Game() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [moveErrMsg, setMoveErrMsg] = useState("");
  const [nextRooms, setNextRooms] = useState([]);
  const [battleRes, setBattleRes] = useState({})
  const [resultsMsg, setResultsMsg] = useState('')

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

    const attackMonster = () => {
      let honeyGained = null;
      let xpGained = currentRoom.monster.xp;
      let playerWeight = currentRoom.xp
      let monsterWeight = currentRoom.monster.xp
      let roll = Math.random(playerWeight, monsterWeight)
      console.log(roll)
      if (playerWeight- roll > monsterWeight - roll) {
        honeyGained = currentRoom.monster.honeyGained
        setResultsMsg("Battle won.")
      } else {
        honeyGained = currentRoom.monster.honeyLost
        setResultsMsg("Battle lost.")
      }
      
      axiosWithAuth()
      .post("https://mudierthegame.herokuapp.com/api/adv/battle", {honeyGained, xpGained})  
      .then(res => setBattleRes(res))
      .catch(err => err)
      
    }
  console.log('GAME', currentRoom)
  console.log('BATTLERES', battleRes)
  if (!currentRoom.players) return <h1>Loading...</h1>;
  return (
    <main style={{ display: "flex", margin: "auto 0", justifyContent: "center" }}>
    <Stats charactersData={currentRoom} battleRes={battleRes} resultsMsg={resultsMsg}/>
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
            attackMonster={attackMonster}
          />
        </div>
        <World currentRoom={currentRoom}/>
      </div>
    </div>
    <Chat charactersData={currentRoom}/>
    </main>
        );
}

export default Game;
