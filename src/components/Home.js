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
          gridTemplateColumns: "50% 50%",
          height: "675px",
          width: "95%",
          border: "solid 5px #778678",
          borderRadius: "10px",
          padding: "25px",
          margin: "30px auto 50px auto",
          backgroundColor: "black",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)",
          backgroundSize: "contain",
          maxWidth: "1225px"
        }}
      >
        <div className="animation-ctr">
          <img src={bear} alt="spacebear" className="spacebear" height="60" />
          <figure id="bees">
            <img src={bee} alt="bee" />
            <img src={bee} alt="bee" />
          </figure>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "VT323",
            fontSize: "1.6rem",
            lineHeight: "1.0",
            maxWidth: "475px",
            textAlign: "justify",
            paddingTop: "5px"
          }}
        >
          <p>
            It's the year 5051. Centuries ago, our Space Bear ancestors became
            the great rulers of the universe after bringing the evil Homo
            Sapiens' legacy of destruction to an end.
          </p>
          <p>
            Society is now teetering on the brink of collapse due to a recent
            shortage of your planet's main source of fuel: Honey.
          </p>
          <p>
            Our only hope is to travel across the galaxy to the last remaining
            hive, filled with dangerous, killer Space Beez who will take your
            life to protect their precious nectar.
          </p>
          <p>
            You have been selected as one of our most elite, tasked with
            defeating the evil Space Beez and taking all the honey that's left
            before they rise up and take over the universe. Do you accept this
            mission?
          </p>
          <NavLink
            style={{
              fontSize: "38px",
              textDecoration: "none",
              color: "silver",
              margin: "20px auto",
              fontWeight: "bold",
              border: "2px solid silver",
              borderRadius: "10px",
              background: "#1d1d1d",
              padding: "10px 30px",
              textTransform: "uppercase"
            }}
            to="/signin"
          >
            Accept Mission
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
