import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../project";
import projects from "../../projects.json";
import "./style.css"

class WebPortfolio extends Component {
  state = { projects };

  render() {
    return (
      <>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1>Web Development Portfolio</h1>
            <h3>Double-click any project for more information</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            {this.state.projects.map(project => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                tech={project.tech}
                repo={project.repo}
                deployed={project.deployed}
                deploy_button_label={project.deploy_button_label}
              />
            ))}
          </Col>
        </Row>
        </>
    );
  }
}

export default WebPortfolio;