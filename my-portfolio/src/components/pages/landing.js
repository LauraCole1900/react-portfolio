import React from "react";
import Container from "react-bootstrap/Container";
import LandingText from "../lander";
import "./style.css"

function Landing() {
  return (
    <Container fluid>
      <LandingText 
        texts={[]}
        wait={3000}
        waitbt={30}
        speed={30}
        // op={number}
      />
    </Container>
  );
}

export default Landing;
