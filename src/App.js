import React, { Component } from "react";

import { BrowserRouter, Route, HashRouter } from "react-router-dom";

import Mondrian from "./Component/Mondrian";
import Panorama from "./Component/Panorama";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/spa">
        {/* here's a div */}
        <div>
          {/* here's a Route */}
          <Route path="/mondrian" component={Mondrian} />
          <Route path="/panorama" component={Panorama} />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
