import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../components/Header.css";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Define responsive styles based on the screen size
  const headerStyle = {
    padding: "10px 20px", // Adjust padding
    flexDirection: "row", // Keep it horizontal
    alignItems: "center",
    justifyContent: "space-between", // Distribute elements evenly
  };

  const logoStyle = {
    width: "140px", // Keep logo width consistent
  };

  const navLinksStyle = {
    display: "flex", // Ensure links are displayed in a row
    alignItems: "center",
    gap: "20px", // Adjust gap between links
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-purple" style={headerStyle}>
      <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
        {isMobile ? (
          <span className="logo-text" style={{ marginLeft: "10px" }}></span>
        ) : null}
      </Navbar.Brand>
      {isMobile && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav style={navLinksStyle}>
          <Nav.Link as={Link} to="/" style={{ fontWeight: "bold", color: "rgb(0, 0, 0)" }}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ fontWeight: "bold", color: "rgb(0, 0, 0)" }}>About</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={{ fontWeight: "bold", color: "rgb(0, 0, 0)" }}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume" style={{ fontWeight: "bold", color: "rgb(0, 0, 0)" }}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
