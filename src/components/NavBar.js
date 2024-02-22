import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/diceQ20.png";
import styles from "../styles/NavBar.module.css";



const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top"> 
      <Container>
        <Navbar.Brand className={styles.NavBrand} >
          <img src={logo} alt="logo" height="65" />
          <span>20 Sided Queer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fa-solid fa-dice-d20"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;