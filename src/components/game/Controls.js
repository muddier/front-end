import React, { useState, useEffect } from "react";

function Controls(props) {
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    // TO DO set a loading status so fast clicks won't error out
    // before new nextRooms list is made
    if (props.nextRooms && props.nextRooms.length > 0) {
      const canMove = [
        props.nextRooms[0]["n"],
        props.nextRooms[1]["e"],
        props.nextRooms[2]["s"],
        props.nextRooms[3]["w"]
      ];
      setDirections(canMove);
    }
  }, [props.nextRooms]);

  if (!props.nextRooms) return;
  return (
    <div
      style={{ margin: "10px", background: "#000", borderRadius: "0 0 10px 0" }}
    >
      <p>{props.moveErrorMsg}</p>
      <button
        className="btn north"
        onClick={e => props.moveRooms(e, "n")}
        style={{
          background: `${directions[0] ? "purple" : "gray"}`,
          margin: "0 5px",
          height: "40px",
          width: "40px"
        }}
        disabled={!directions[0]}
      >
        N
      </button>
      <div>
        <button
          className="btn west"
          onClick={e => props.moveRooms(e, "w")}
          style={{
            background: `${directions[3] ? "purple" : "gray"}`,
            margin: "5px 25px",
            height: "40px",
            width: "40px"
          }}
          disabled={!directions[3]}
        >
          W
        </button>
        <button
          className="btn east"
          onClick={e => props.moveRooms(e, "e")}
          style={{
            background: `${directions[1] ? "purple" : "gray"}`,
            margin: "5px 25px",
            height: "40px",
            width: "40px"
          }}
          disabled={!directions[1]}
        >
          E
        </button>
      </div>
      <button
        className="btn south"
        onClick={e => props.moveRooms(e, "s")}
        style={{
          background: `${directions[2] ? "purple" : "gray"}`,
          margin: "0 5px",
          height: "40px",
          width: "40px"
        }}
        disabled={!directions[2]}
      >
        S
      </button>
    </div>
  );
}

export default Controls;
