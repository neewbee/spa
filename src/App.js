import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Mondrian from "./Component/Mondrian";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/spa">
        {/* here's a div */}
        <div>
          {/* here's a Route */}
          <Route path="/mondrian" component={Mondrian} />
          <div id="container">
            <div id="border" />
            <div id="blocker-1" />
            <div id="blocker-2" />
            <h2>neewbee</h2>
            <h1>welcome</h1>
            <h2>bar</h2>
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
