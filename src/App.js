import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Law from "./Views/Law";
import Drafty from "./Components/Drafty";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/law">
            <Law />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/">
            <Drafty />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
