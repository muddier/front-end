import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./components/authentication/SignIn";
import Home from "./components/Home";

function App() {
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<Route path='/' component={Home} />
			<Route path='/signin' component={SignIn} />
			<Route path='/game' />
		</div>
	);
}

export default App;
