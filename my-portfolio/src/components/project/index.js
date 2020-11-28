import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

// Flip cards?
// https://codepen.io/danishyma/pen/dyXEjev


function ProjectCard(props) {
  return (
    <Container fluid>
      <Row>
        <Card className="project-card" style={{ width: '18em' }}>
          <Card.Header><h3>{props.name}</h3></Card.Header>
          <Card.Img src={props.image} />
          <Card.Body>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button href={props.deployed} target="_blank">{props.name}</Button>
            <Button href={props.repo} target="_blank">{props.name} GitHub Repo</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProjectCard;