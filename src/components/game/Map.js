import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Room({ room }) {
  return (
    <div
      style={{
        height: "40px",
        width: "40px",
        background: `${room ? `white` : `none`}`,
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
        if (index < 19) {
          return <Room key={index} room={room} />;
        }
      })}
    </div>
  );
}

function Map() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://mudierthegame.herokuapp.com/api/adv/matrix")
      .then(res => {
        // console.log(res);
        setRooms(res.data.matrix.slice(38, 50));
      })
      .catch(err => {
        console.log(err);
      });
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
