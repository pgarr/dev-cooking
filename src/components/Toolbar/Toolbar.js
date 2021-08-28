import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Toolbar = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Cooking dev</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/recipes">Przepisy</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;
