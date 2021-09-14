import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Toolbar = ({ history }) => {
  const { t } = useTranslation();

  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "recipes":
        history.push({ pathname: "/recipes" });
        break;
      default:
        break;
    }
  };

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Cooking dev</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" onSelect={handleSelect}>
          <Nav.Link eventKey="recipes">{t("recipes")}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Toolbar);
