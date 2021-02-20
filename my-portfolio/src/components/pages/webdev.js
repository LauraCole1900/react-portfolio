import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ProjectCard from "../project";
import projects from "../../projects.json";
import github from "../../pix/GitHub-Mark-120px-plus.png";
import "./style.css"

class WebPortfolio extends Component {
  state = { projects };

  render() {
    return (
      <>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Row>
              <Col sm={12}>
                <h1>Web Development Portfolio</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={10}>
                <h3>Double-click any project for more information</h3>
              </Col>
              <Col sm={2}>
                <p className="gitAlign">See more on &nbsp;<a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank"><Image fluid src={github} alt="GitHub icon" className="icon" /></a></p>
              </Col>
            </Row>
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