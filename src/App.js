import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/Home";
import Game from "./components/game/Game";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        minHeight: "100vh",
        padding: "25px"
      }}
    >
      <h1>Space Beez</h1>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/game" component={Game} />
    </div>
  );
}

export default App;
