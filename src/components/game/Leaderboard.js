import React, { useState, useEffect } from "react";
import axios from "axios";

function LeaderList({ leader }) {
	console.log(leader);
	return (
		<div>
			<strong>{leader.username} </strong>
			<span>Honey: {leader.honey}</span> <span>XP: {leader.xp}</span>
		</div>
	);
}

function Leaderboard() {
	const [leaders, setLeaders] = useState([]);

	useEffect(() => {
		axios
			.get("https://mudierthegame.herokuapp.com/api/adv/leaderboard")
			.then(res => {
				console.log("res:", res.data.topPlayers);
				setLeaders(res.data.topPlayers);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>Leader Board</h1>
			{leaders.map((leader, index) => {
				return <LeaderList leader={leader} key={index} />;
			})}
		</div>
	);
}

export default Leaderboard;
