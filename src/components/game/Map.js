import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../../styles/Map.scss";
import honey from "../../assets/honey.svg";

function Room({ room }) {
  console.log(room);
  return (
    <>
      {room ? (
        <img
          src={honey}
          alt="honeycomb"
          style={{
            height: "40px",
            width: "40px",
            display: "inline-flex",
            margin: "5px"
          }}
        />
      ) : (
        <div
          style={{
            height: "40px",
            width: "40px",
            display: "inline-flex",
            margin: "5px"
          }}
        />
      )}
    </>
  );
}

function Row({ row }) {
  return (
    <div style={{ display: "flex" }}>
      {row.map((room, index) => {
        if (index < 16) {
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
        setRooms(res.data.matrix.slice(42, 50));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        background: "#F89500",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px"
      }}
    >
      {rooms.map((row, index) => {
        return <Row row={row} key={index} />;
      })}
    </div>
  );
}

export default Map;
