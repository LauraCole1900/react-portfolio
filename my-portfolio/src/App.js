import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import Home from "./components/pages/home.js";
import Landing from "./components/pages/landing.js";
import About from "./components/pages/about.js";
import Portfolio from "./components/pages/portfolio.js";
import Contact from "./components/pages/contact.js";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container fluid className="mycontainer">
          <Route exact path="/react-portfolio" component={Landing} />
          <Route exact path="/react-portfolio/about" component={About} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Container>
        <div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;