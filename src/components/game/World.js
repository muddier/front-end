import React from "react";
import Player from "./Player";
import Map from "./Map";

function World() {
	return (
		<div style={{ margin: "0 50px" }}>
			<Player />
			<Map />
		</div>
	);
}

export default World;
