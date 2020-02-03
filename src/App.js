import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Welcome to Muddier the Game</h1>
      <Route path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/game" />
    </div>
  );
}

export default App;
