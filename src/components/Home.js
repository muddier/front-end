import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/signin">Sign In</NavLink>{" "}
        <NavLink to="/signup">Create Account</NavLink>
      </nav>
    </div>
  );
}

export default Home;
