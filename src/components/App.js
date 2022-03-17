import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TodosList from "./TodosList";

import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={TodosList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
