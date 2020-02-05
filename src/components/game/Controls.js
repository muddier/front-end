import React from "react";

function Controls(props) {
  // console.log(props.nextRooms[0]);
  return (
    <>
      <button
        className="btn north"
        onClick={e => props.moveRooms(e, "n")}
        style={{ background: "white", margin: "5px" }}
        disabled={props.nextRooms["n"] === 0}
      >
        N
      </button>
      <div>
        <button
          className="btn west"
          onClick={e => props.moveRooms(e, "w")}
          style={{ background: "white", margin: "5px 25px" }}
        >
          W
        </button>
        <button
          className="btn east"
          onClick={e => props.moveRooms(e, "e")}
          style={{ background: "white", margin: "5px 30px" }}
        >
          E
        </button>
      </div>
      <button
        className="btn south"
        onClick={e => props.moveRooms(e, "s")}
        style={{ background: "white", margin: "5px" }}
      >
        S
      </button>
    </>
  );
}

export default Controls;
