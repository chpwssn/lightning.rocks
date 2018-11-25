import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import About from "./presentational/About";
import ListDisplay from "./presentational/ListDisplay";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ListDisplay} />
            <Route exact path="/about" component={About} />
            <Route exact path="/type/:type" component={ListDisplay} />
            <Route exact path="/tag/:tag" component={ListDisplay} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
