import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <p className="biotext">I grew up in LaSalle, a small town in northeastern Colorado. After graduating from the <a href="http://www.unco.edu">University of Northern Colorado</a> Lab School in nearby Greeley, I went on to earn my Bachelor of Music Education from the university proper. I then went to work at Milliken Elementary School as the music teacher and stayed there for several years before deciding to pursue web development.</p>

          <p className="biotext">In September of 2020, I started the University of Denver Coding Bootcamp program to certify as a full-stack web developer. I have always enjoyed both helping people and creative endeavors, and web development seems a good way to combine those passions.</p>

          <p className="biotext">In my spare time, I still enjoy making music with the <a href="http://www.greeleychorale.org">Greeley Chorale</a> and training in martial arts. I train in <a href="https://www.skski.net/">Kosho Ryu Kempo</a>, <a href="http://www.koryu-uchinadi.com">Koryu Uchinadi</a>, and Shotokan.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;