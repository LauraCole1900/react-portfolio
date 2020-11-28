import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// https://codepen.io/BrunoIF/pen/oNjNepa - transparent React navbar

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="md" className="navbar">
      <Navbar.Brand href="#">Laura Cole</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            About
          </Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact Me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;
// ReactDOM.render(<Navigation />, document.getElementById('root'))