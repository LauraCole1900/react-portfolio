import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import linkedin from "../../icons/linkedin-icon-128px.png";
import githublt from "../../icons/GitHub-Mark-Light-120px-plus.png";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm={10}></Col>
        <Col sm={1}>
          <a href="https://www.linkedin.com/in/laura-cole-3661b01b9/?trk=profile-badge" target="_blank"><Image fluid src={linkedin} alt="LinkedIn icon" className="icon" /></a>
        </Col>
        <Col sm={1}>
          <a href="https://github.com/LauraCole1900" target="_blank"><Image fluid src={githublt} alt="GitHub icon" className="icon" /></a>
        </Col>
      </Row>
    </div >
  )
}

export default Footer;