import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div>
			<NavLink to='/signin'>Sign In</NavLink>
		</div>
	);
}

export default Home;
