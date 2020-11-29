import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../hero";
import "./style.css"

function Landing() {
  return (
    <Container fluid>
      <Hero 
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
