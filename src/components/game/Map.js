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
        margin: "5px"
      }}
    >
      {room}
    </div>
  );
}

function Row({ row }) {
  return (
    <div style={{ display: "flex" }}>
      {row.map((room, index) => {
        return <Room key={index} room={room} />;
      })}
    </div>
  );
}

function Map() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms([
      [1, 1],
      [1, 1],
      [1, 0]
    ]);
  }, []);

  return (
    <div
      style={{
        background: "grey",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {rooms.map((row, index) => {
        return <Row row={row} key={index} />;
      })}
    </div>
  );
}

export default Map;
