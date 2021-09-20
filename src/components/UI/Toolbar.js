import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import BrandIcon from "./BrandIcon";

const NavContainer = styled.div`
  background: #023fa1;
  width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  margin: auto;
  max-width: 1200px;
`;

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
    <NavContainer>
      <StyledNavbar variant="dark">
        <Navbar.Brand>
          <BrandIcon />
        </Navbar.Brand>
        <Nav className="mr-auto" onSelect={handleSelect}>
          <Nav.Link eventKey="recipes">{t("recipes")}</Nav.Link>
        </Nav>
      </StyledNavbar>
    </NavContainer>
  );
};

export default withRouter(Toolbar);
