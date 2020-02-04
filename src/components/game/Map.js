import React, { useState, useEffect } from "react";

function Room({ room }) {
	return (
		<div
			style={{
				height: "40px",
				width: "40px",
				background: `${room === 1 ? `white` : `none`}`,
				color: "black",
				display: "inline-flex",
				margin: "5px",
			}}
		>
			{room}
		</div>
	);
}

function Row({ row }) {
	return (
		<div style={{ display: "flex" }}>
			{row.map(room => {
				return <Room room={room} />;
			})}
		</div>
	);
}

function Map() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		setRooms([
			[0, 1],
			[1, 1],
			[1, 1],
		]);
	}, []);

	return (
		<div
			style={{
				background: "grey",
				display: "flex",
				flexDirection: "column",
				width: "80%",
			}}
		>
			{rooms.map(row => {
				return <Row row={row} />;
			})}
		</div>
	);
}

export default Map;
