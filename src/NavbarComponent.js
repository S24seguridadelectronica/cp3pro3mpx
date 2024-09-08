import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">S24 Seguridad Electrónica 24/7</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Características</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
