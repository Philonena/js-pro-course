import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import AddToDoForm from "./components/AddToDoForm";
import AllToDos from "./components/AllToDos";
import ActiveToDos from "./components/ActiveToDos";
import DoneToDos from "./components/DoneToDos";

import './App.css';

export default function App() {
  return (
    <>
      <AddToDoForm />
      <NavBar />

      <Switch>
        <Route path="/all">
          <AllToDos />
        </Route>
        <Route path="/active">
          <ActiveToDos />
        </Route>
        <Route path="/done">
          <DoneToDos />
        </Route>
        <Route path="/" exact>
          <Redirect to="/all" /> 
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

