import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import World from "./World";

function Game() {
	const [currentRoom, setCurrentRoom] = useState({});
	const [moveErrMsg, setMoveErrMsg] = useState("");
	useEffect(() => {
		// set the player in the intial room
		axiosWithAuth()
			.get("https://mudierthegame.herokuapp.com/api/adv/init")
			.then(res => {
				console.log(res);
				setCurrentRoom(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, []);

	const moveRooms = (e, direction) => {
		e.preventDefault();
		axiosWithAuth()
			.post("https://mudierthegame.herokuapp.com/api/adv/move", {
				direction,
			})
			.then(res => {
				console.log(res);
				setCurrentRoom(res.data);
				setMoveErrMsg(res.data.error_msg);
			})
			.catch(err => {
				console.log(err.response);
			});
	};

	if (!currentRoom.players) return <h1>Loading...</h1>;
	return (
		<div>
			<h2>Welcome {currentRoom.name}.</h2>
			<div style={{ display: "flex" }}>
				<div style={{ flex: 1, margin: "10px" }}>
					<h3>You are currently in {currentRoom.title}.</h3>
					<h4>{currentRoom.description}.</h4>
				</div>
				<div
					style={{
						border: "1px solid blue",
						width: "50%",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						paddingTop: "20px",
						flex: 1,
						margin: "10px",
					}}
				>
					<h4>Other players in the room:</h4>
					<ul
						style={{
							listStyleType: "none",
							fontSize: "24px",
						}}
					>
						{currentRoom.players.map((player, index) => {
							return <li key={index}>{player}</li>;
						})}
					</ul>
				</div>
			</div>
			<p>{moveErrMsg}</p>
			<button
				className='btn north'
				onClick={e => moveRooms(e, "n")}
				style={{ background: "white", margin: "5px" }}
			>
				N
			</button>
			<div>
				<button
					className='btn west'
					onClick={e => moveRooms(e, "w")}
					style={{ background: "white", margin: "5px 25px" }}
				>
					W
				</button>
				<button
					className='btn east'
					onClick={e => moveRooms(e, "e")}
					style={{ background: "white", margin: "5px 30px" }}
				>
					E
				</button>
			</div>
			<button
				className='btn south'
				onClick={e => moveRooms(e, "s")}
				style={{ background: "white", margin: "5px" }}
			>
				S
			</button>
			<World />
		</div>
	);
}

export default Game;
