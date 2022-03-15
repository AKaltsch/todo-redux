import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <div>App</div>
      </div>
    </Router>
  );
};

export default App;
