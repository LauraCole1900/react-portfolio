import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ProjectCard from "../project";
import projects from "../../projects.json";
import github from "../../pix/GitHub-Mark-120px-plus.png";
import htmlicon from "../../pix/html5-icon.png";
import cssicon from "../../pix/css3-icon.png";
import bootstrapicon from "../../pix/bootstrap-icon.png";
import materializeicon from "../../pix/materialize-icon.png"
import jsicon from "../../pix/js-icon.png";
import jqueryicon from "../../pix/jquery-icon.png";
import nodejsicon from "../../pix/nodejs-icon.png";
import npmicon from "../../pix/npm-icon.png";
import expressjsicon from "../../pix/expressjs-icon.png";
import mysqlicon from "../../pix/mysql-icon.png";
import mongodbicon from "../../pix/mongodb-icon.png";
import reacticon from "../../pix/react-icon.png";
import reactbootstrap from "../../pix/react-bootstrap-icon.png";
import mernicon from "../../pix/MERN-icon.png";
import githubicon from "../../pix/GitHub-Mark-120px-plus.png"
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
                subtitle={project.subtitle}
                description={project.description}
                tech={project.tech}
                repo={project.repo}
                deployed={project.deployed}
                deploy_button_label={project.deploy_button_label}
              />
            ))}
          </Col>
        </Row>
        <Row className="topMargin">
          <Col sm={1}></Col>
          <Col sm={10}><h1 className="outline">Technical Skills</h1></Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Image fluid src={htmlicon} alt="HTML5" className="iconBig ltBg" />
            <Image fluid src={cssicon} alt="CSS3" className="iconBig ltBg" />
            <Image fluid src={bootstrapicon} alt="Bootstrap" className="iconBig darkerBg" />
            <Image fluid src={materializeicon} alt="Materialize" className="iconBig" />
            <Image fluid src={jsicon} alt="JavaScript" className="iconBig ltBg" />
            <Image fluid src={jqueryicon} alt="jQuery" className="iconBig ltBg" />
            <Image fluid src={nodejsicon} alt="Node.js" className="iconBig darkBg" />
            <Image fluid src={npmicon} alt="NPM" className="iconBig" />
            <Image fluid src={expressjsicon} alt="Express" className="iconBig darkerBg" />
            <Image fluid src={mysqlicon} alt="MySQL" className="iconBig darkBg" />
            <Image fluid src={mongodbicon} alt="MongoDB" className="iconBig darkBg" />
            <Image fluid src={githubicon} alt="GitHub" className="iconBig ltBg" />
            <Image fluid src={reacticon} alt="React" className="iconBig" />
            <Image fluid src={reactbootstrap} alt="React Bootstrap" className="iconBig" />
            <Image fluid src={mernicon} alt="MERN" className="iconBig" />
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </>
    );
  }
}

export default WebPortfolio;