import React from "react";
import { NavLink } from "react-router-dom";
import bee from "../assets/bee.png";
import bear from "../assets/spacesuit_bear.png";
import "../styles/home.scss";

function Home() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          height: "400px",
          border: "solid 1px silver",
          borderRadius: "10px",
          padding: "25px",
          marginTop: "30px",
          marginBottom: "50px",
          backgroundColor: "black",
          color: "#99E550"
        }}
      >
        <div className="animation-ctr">
          <img src={bear} alt="spacebear" className="spacebear" height="60" />
          <figure id="bees">
            <img src={bee} alt="bee" />
            <img src={bee} alt="bee" />
          </figure>
        </div>
        <div>
          <h2>Welcome to Space Beez!</h2>
          <p>
            Space ipsum it suddenly struck me that that tiny pea, pretty and
            blue, was the Earth. I didn’t feel like a giant. I felt very, very
            small.
          </p>
          <p>
            Space ipsum it suddenly struck me that that tiny pea, pretty and
            blue, was the Earth. I put up my thumb and shut one eye, and my
            thumb blotted out the planet Earth.
          </p>
        </div>
      </div>
      <nav>
        <NavLink
          style={{
            fontSize: "24px",
            textDecoration: "none",
            color: "purple",
            margin: "20px auto",
            fontWeight: "bold",
            border: "1px solid silver",
            borderRadius: "10px",
            background: "black",
            padding: "15px 100px"
          }}
          to="/signin"
        >
          Play Now!
        </NavLink>
      </nav>
    </>
  );
}

export default Home;
