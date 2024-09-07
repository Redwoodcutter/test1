import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://via.placeholder.com/50"
            alt="heybooster logo"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          1in1000
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="active">Hakkımızda</Nav.Link>
            <Nav.Link href="#">Hizmetlerimiz</Nav.Link>
            <Nav.Link href="#">Referanslarımız</Nav.Link>
            <Button className="header-button">Hemen Başvur</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
