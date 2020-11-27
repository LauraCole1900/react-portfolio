import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./components/pages/home.js";
import About from "./components/pages/about.js";
import Portfolio from "./components/pages/portfolio.js";
import Contact from "./components/pages/contact.js";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;