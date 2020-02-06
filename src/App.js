import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/Home";
import Game from "./components/game/Game";
import Leaderboard from "./components/game/Leaderboard";

// import Pusher from 'pusher-js';

// Pusher.logToConsole = true;
// const pusher = new Pusher('0eed8913739ddced563b', {
//       cluster: 'us2',
//       forceTLS: true
//     });

// let channel = pusher.subscribe('room-{}');
// channel.bind('broadcast', data => {
//   console.log(JSON.stringify(data))
// })

function App() {
	return (
		<div
			className='App'
			style={{
				textAlign: "center",
				minHeight: "100vh",
				padding: "25px",
			}}
		>
			<h1 className='title'>Space Beez</h1>
			<Route exact path='/' component={Home} />
			<Route path='/signup' component={SignUp} />
			<Route path='/signin' component={SignIn} />
			<Route path='/leaderboard' component={Leaderboard} />
			<PrivateRoute path='/game' component={Game} />
		</div>
	);
}

export default App;
