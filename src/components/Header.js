import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../components/Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-ombre">
      <Navbar.Brand as={Link} to="/">DD</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/jobposting">Projects</Nav.Link>
          <Nav.Link as={Link} to="/login">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
