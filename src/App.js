import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Home from "./components/Home";
import Game from "./components/game/Game";
import { axiosWithAuth } from "./components/utils/axiosWithAuth";

function App() {
  useEffect(() => {
    axiosWithAuth()
      .get("https://mudierthegame.herokuapp.com/api/adv/coors/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", height: "100vh" }}>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/game" component={Game} />
    </div>
  );
}

export default App;
