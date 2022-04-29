import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TodosList from "./todos/TodosList";
import TodoCreate from "./todos/TodoCreate";

import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodosList} />
            <Route path="/create" component={TodoCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
