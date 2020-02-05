import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <NavLink
          className="navlink"
          style={{
            fontSize: "24px",
            margin: "20px",
            color: "#f8c129",
            border: "1px solid #f8c129",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none"
          }}
          to="/signin"
        >
          Sign In
        </NavLink>{" "}
        <NavLink
          style={{
            fontSize: "24px",
            margin: "20px",
            background: "#F89500",
            color: "#1d1d1d",
            padding: "11px",
            borderRadius: "10px",
            textDecoration: "none"
          }}
          className="navlink"
          to="/signup"
        >
          Create Account
        </NavLink>
      </nav>
    </div>
  );
}

export default Home;
