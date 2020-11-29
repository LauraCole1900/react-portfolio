import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import linkedin from "../../icons/linkedin-icon-128px.png"
import github from "../../icons/GitHub-Mark-120px-plus.png";
import resume from "../../icons/resume-document-icon.png";
import "./style.css";

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h1> Contact Me</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={2}></Col>
        <Col sm={10}>
          <p>Find me professionally:</p>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <p className="git">LinkedIn</p>
          <a href="https://www.linkedin.com/in/laura-cole-3661b01b9/?trk=profile-badge" target="_blank"><Image fluid src={linkedin} alt="LinkedIn icon" className="icon" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <p className="git">GitHub</p>
          <a href="https://github.com/LauraCole1900" target="_blank"><Image fluid src={github} alt="GitHub icon" className="icon" /></a>
        </Col>
        <Col sm={6}>
          <p>email: <a href="mailto:lauracole1900@comcast.net">lauracole1900@comcast.net</a></p>
          <p>Phone: (970) 353-0872</p>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <p className="git">Résumé</p>
          <a href="https://drive.google.com/file/d/1gOy3CkufWH_k_Y9dVFQYfZc955bPCT25/view?usp=sharing" target="_blank"><Image fluid src={resume} alt="Résumé icon" className="icon" /></a>
        </Col>
      </Row>
    </Container >
  );
}

export default Contact;