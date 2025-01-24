import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import BrandIcon from "./BrandIcon";
import { FirebaseContext } from "../../firebase/firebaseProvider";
import UserBadge from "./UserBadge";

const NavContainer = styled.div`
  background: #023fa1;
  width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  height: 71px;
  margin: auto;
  max-width: 1200px;
`;

const Toolbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { api } = useContext(FirebaseContext);

  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "recipes":
        navigate("/recipes");
        break;
      case "login":
        api.auth.signInWithGoogle();
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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <UserBadge />
          </Navbar.Text>
        </Navbar.Collapse>
      </StyledNavbar>
    </NavContainer>
  );
};

export default Toolbar;
