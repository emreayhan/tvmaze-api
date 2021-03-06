import React from "react";
import "./App.scss";
import List from "./components/list";
import Details from "./components/details";
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
          <NavLink className="navLink" to="/" exact>
            Home
          </NavLink>
          <NavLink className="navLink" to="/about">
            About
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/about" component={About} />
          <Route path="/:id" component={Details} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
