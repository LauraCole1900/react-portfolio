import React from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"

const MartialArtist = () => {

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h1>Martial Artist</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3><Link src="https://www.skski.net/">Kosho Ryu Kempo</Link></h3>
          <ul>
            <li>Years: 2014-present</li>
            <li>Current instructor: Jon Ludwig Shihan</li>
            <li>Highest rank attained: Nikyu/Brown 2</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3>Shotokan</h3>
          <ul>
            <li>Years: 2018-present</li>
            <li>Current instructors: Morgan Mayfield Sensei and River Mayfield Sensei</li>
            <li>Highest rank attained: Shodan</li>
            <li>Currently working as assistant instructor at Warrior's Way Karate Greeley</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <h3><Link src="http://www.koryu-uchinadi.com/">Koryu Uchinadi</Link></h3>
          <ul>
            <li>Years: 2018-present</li>
            <li>Current instructors: Patrick McCarthy Hanshi and T. Erik Angerhofer Shihan</li>
            <li>Highest rank attained: unclear, currently enrolled in KU Yudansha Fast Track program</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default MartialArtist