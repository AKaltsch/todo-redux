import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodosList from "./todos/TodosList";
import TodoCreate from "./todos/TodoCreate";
import TodoEdit from "./todos/TodoEdit";
import TodoDelete from "./todos/TodoDelete";

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
            <Route path="/todos/delete/:id" component={TodoDelete} />
            <Route path="/todos/edit/:id" component={TodoEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
