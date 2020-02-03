import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavLink to="/signin">Sign In</NavLink>{" "}
      <NavLink to="/signup">Create Account</NavLink>
      <h1>Welcome to Space Beez</h1>
      <p>Sign in or Create a new account to start playing.</p>
    </div>
  );
}

export default Home;
