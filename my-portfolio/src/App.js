import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import Home from "./components/pages/home.js";
import About from "./components/pages/about.js";
import Portfolio from "./components/pages/portfolio.js";
import Contact from "./components/pages/contact.js";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container fluid>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;