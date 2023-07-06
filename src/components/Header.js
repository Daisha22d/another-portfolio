import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../src/images/logo.png';
import "../components/Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-ombre">
      <img src={Logo} alt="logo" className="logo" style={{width: "180px", position: "absolute", top: "-60px", left: "0"}} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{fontWeight: "bold", color: "lightyellow"}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about-me" style={{fontWeight: "bold", color: "lightyellow"}}>About Me</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={{fontWeight: "bold", color: "lightyellow"}}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume" style={{fontWeight: "bold", color: "lightyellow"}}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
