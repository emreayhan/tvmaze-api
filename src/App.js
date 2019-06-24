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
          <NavLink className="navLink" to="https://emreayhan.github.io/tvmaze-api/" exact>
            Home
          </NavLink>
          <NavLink className="navLink" to="https://emreayhan.github.io/tvmaze-api/about">
            About
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="https://emreayhan.github.io/tvmaze-api/" component={List} />
          <Route exact path="https://emreayhan.github.io/tvmaze-api/about" component={About} />
          <Route exact path="https://emreayhan.github.io/tvmaze-api/:id" component={Details} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
