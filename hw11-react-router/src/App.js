import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Clicker from "./Components/clicker/Clicker";
import Emoji from "./Components/emoji/Emoji";
import Posts from "./Components/posts/Posts";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/clicker">
          <Clicker />
        </Route>
        <Route path="/emoji">
          <Emoji />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

