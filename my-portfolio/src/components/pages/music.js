import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Musician = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h1>Musician</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3>Bachelor of Music Education, emphasis in Voice, University of Northern Colorado, 12/2000</h3>
          <ul>
            <li>Member, Concert Choir, 1998-2000</li>
            <li>Member, Women's Glee Club, 1997-2000</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3>Music teacher, Milliken Elementary School, 8/2001-6/2018</h3>
          <ul>
            <li>Chose, taught and led grade-level programs every year</li>
            <li>Created and led the choir program, 2002-2018</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3>Member, Greeley Chorale, 2019-present</h3>
          <ul>
            <li>Soloist on October 5, 2019 concert</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Musician;