import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodosList from "./todos/TodosList";
import TodoCreate from "./todos/TodoCreate";

import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      {/* !!!Come back later!!! change BrowserRouter to just <Router> */}
      {/* <Router history={history}> ......... had trouble getting the page to render with history */}
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodosList} />
            <Route path="/todos/create" component={TodoCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
