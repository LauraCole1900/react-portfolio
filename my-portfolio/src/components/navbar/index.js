import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand>
        <Link to="/about" className={location.pathname === "/about" ? "mylogo active" : "mylogo"}>
          Laura Cole
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/react-portfolio" className={location.pathname === "/" ? "navlink active" : "navlink"}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "navlink active" : "navlink"}>
            About
          </Link>
          <Link to="/webdev" className={location.pathname === "/webdev" ? "navlink active" : "navlink"}>
            Webdev
          </Link>
          <Link to="/musician" className={location.pathname === "/musician" ? "navlink active" : "navlink"}>
            Musician
          </Link>
          <Link to="/martial_artist" className={location.pathname === "/martial_artist" ? "navlink active" : "navlink"}>
            Martial Artist
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "navlink active" : "navlink"}>
            Contact Me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;