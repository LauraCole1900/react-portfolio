import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

// Flip cards code from here: https://codepen.io/danishyma/pen/dyXEjev

function ProjectCard(props) {

  const handleClick = () => {
    document.querySelectorAll('.card-inner').forEach(item => {
      var timeout;
      clearTimeout(timeout);
      item.addEventListener('click', el => {
        if (item.style.transform === "rotateY(180deg) translateX(-100%)") {
          item.style.transform = "rotateY(0deg)";
        }
        else {
          item.style.transform = "rotateY(180deg) translateX(-100%)";
        }
        timeout = setTimeout(function () {
          item.style.transform = "rotateY(0deg)";
        }, 35000);
      })
    })
  }


  return (
    <Card className="project-card" onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <Card.Header className="card-title"><h2>{props.name}</h2></Card.Header>
          <Card.Img src={props.image} alt={props.name} className="bgImage" />
        </div>
        <div className="card-back">
          <Card.Body>
            <Card.Text>
              <h2>{props.name}</h2>
              <p>{props.description}</p><br />
              <p>{props.tech}</p>
            </Card.Text>
            <div className="btndiv">
              <Button className="btn" href={props.deployed} rel="noreferrer noopener" target="_blank">{props.deploy_button_label}</Button>
            </div>
            <div className="btndiv">
              <Button className="btn" href={props.repo} rel="noreferrer noopener" target="_blank">GitHub Repo</Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;