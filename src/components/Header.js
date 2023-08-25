import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../components/Header.css";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuExpanded(!menuExpanded);
    }
  };

  const closeMenu = () => {  
    if (isMobile) {
      setMenuExpanded(false);
    }
  };

  const headerStyle = {
    padding: "10px 20px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-purple"
      style={headerStyle}
      expanded={menuExpanded}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ display: "flex", alignItems: "center" }}
      >
        {isMobile ? (
          <span className="logo-text" style={{ marginLeft: "10px" }}></span>
        ) : null}
      </Navbar.Brand>
      {isMobile && (
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
        />
      )}
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav style={navLinksStyle}>
          <Nav.Link
            as={Link}
            to="/"
            style={{ fontWeight: "bold", color: "rgb(255, 255, 255)" }}
            onClick={closeMenu}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            style={{ fontWeight: "bold", color: "rgb(255, 255, 255)" }}
            onClick={closeMenu}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/projects"
            style={{ fontWeight: "bold", color: "rgb(255, 255, 255)" }}
            onClick={closeMenu}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/resume"
            style={{ fontWeight: "bold", color: "rgb(255, 255, 255)" }}
            onClick={closeMenu}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
