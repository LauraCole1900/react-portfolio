import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";


// https://codepen.io/BrunoIF/pen/oNjNepa - transparent React navbar

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand>
        <Link to="/react-portfolio/about" className={location.pathname === "/about" ? "mylogo active" : "mylogo"}>
          Laura Cole
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/react-portfolio" className={location.pathname === "/" ? "navlink active" : "navlink"}>
            Home
          </Link>
          <Link to="/react-portfolio/about" className={location.pathname === "/about" ? "navlink active" : "navlink"}>
            About
          </Link>
          <Link to="/react-portfolio/portfolio" className={location.pathname === "/portfolio" ? "navlink active" : "navlink"}>
            Portfolio
          </Link>
          <Link to="/react-portfolio/contact" className={location.pathname === "/contact" ? "navlink active" : "navlink"}>
            Contact Me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;
// ReactDOM.render(<Navigation />, document.getElementById('root'))