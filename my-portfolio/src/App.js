import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Contact, Landing, MartialArtist, Musician, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Container fluid className="mycontainer">
          <Route exact path="/about" component={About} />
          <Route exact path="/webdev" component={WebPortfolio} />
          <Route exact path="/martial_artist" component={MartialArtist} />
          <Route exact path="/musician" component={Musician} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path={["/", "/react-portfolio"]} component={Landing} />
        </Container>
        <div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;