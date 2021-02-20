import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import choralepic from "../../pix/chorale_2.jpg"
import "./style.css";

const Musician = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <Row>
            <h1>Musician</h1>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={7}>
          <Row>
            <h2>Mezzo-Soprano</h2>
          </Row>
          <Row>
            <h3>Bachelor of Music Education, emphasis in Voice, <a href="http://www.unco.edu" rel="noreferrer noopener" target="_blank">University of Northern Colorado</a>, 12/2000</h3>
          </Row>
          <Row>
            <ul>
              <li>Member, Concert Choir, 1998-2000</li>
              <li>Member, Women's Glee Club, 1997-2000</li>
            </ul>
          </Row>
          <Row>
            <h3>Music teacher, Milliken Elementary School, 8/2001-6/2018</h3>
          </Row>
          <Row>
            <ul>
              <li>Chose, taught and led grade-level programs every year</li>
              <li>Created and led the choir program, 2002-2018</li>
            </ul>
          </Row>
          <Row>
            <h3>Member, <a href="http://www.greeleychorale.org" rel="noreferrer noopener" target="_blank">Greeley Chorale</a>, 2019-present</h3>
          </Row>
          <Row>
            <ul>
              <li>Soloist on October 5, 2019 concert</li>
            </ul>
          </Row>
        </Col>
        <Col sm={3}>
          <Image fluid src={choralepic} alt="Laura Cole" className="mypic" />
          <p className="caption">Picture by Susan McKenzie, used by permission</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Musician;