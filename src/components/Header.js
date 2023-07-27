import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../src/images/logo.png';
import "../components/Header.css";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Define responsive styles based on the screen size
  const headerStyle = {
    padding: "0 1px",
    height: isMobile ? "80px" : "50px", 
    flexDirection: isMobile ? "column" : "row", 
    // alignItems: "center", 
  };

  const logoStyle = {
    width: isMobile ? "80px" : "140px", 
    marginBottom: isMobile ? "10px" : "0",
    marginRight: isMobile ? "0" : "10px", 
  };

  const navLinksStyle = {
    marginTop: isMobile ? "10px" : "0", 
    marginLeft: isMobile ? "0" : "auto", 
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-purple" style={headerStyle}>
      <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" className="logo" style={logoStyle} />
        {isMobile ? (
          <span className="logo-text" style={{ marginLeft: "10px" }}></span>
        ) : null}
      </Navbar.Brand>
      {isMobile && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav style={navLinksStyle}>
          <Nav.Link as={Link} to="/" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)" }}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)" }}>About</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)" }}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume" style={{ fontWeight: "bold", color: "rgb(246, 2, 96)" }}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
