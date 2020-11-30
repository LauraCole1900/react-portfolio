import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

// Flip cards?
// https://codepen.io/danishyma/pen/dyXEjev


function ProjectCard(props) {
  return (
    <Card className="project-card">
      <Card.Header className="card-title"><h2>{props.name}</h2></Card.Header>
      <Card.Img src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className="btndiv">
          <Button className="btn" href={props.deployed} target="_blank">{props.deploy_button_label}</Button>
        </div>
        <div className="btndiv">
          <Button className="btn" href={props.repo} target="_blank">GitHub Repo</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;