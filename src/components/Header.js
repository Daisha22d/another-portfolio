import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../src/images/logo.png';
import "../components/Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-purple" style={{ padding: "0 20px", height: "80px" }}>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "-50px" }}>
          <img src={Logo} alt="logo" className="logo" style={{ width: "140px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)", marginLeft: "10px" }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)", marginLeft: "10px" }}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)", marginLeft: "10px" }}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/resume" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)", marginLeft: "10px" }}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
