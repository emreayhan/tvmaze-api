import React from "react";
import "./App.css";
import List from "./components/list";
import Detail from "./components/details";
import About from "./components/about";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/about">About</NavLink>
          {" | "}
        </nav>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
