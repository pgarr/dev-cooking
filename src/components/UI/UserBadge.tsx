import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Button, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";
import { FirebaseContext } from "../../firebase/firebase";
import { useAppSelector } from "../../store/store";

const LogoutIcon = styled(FontAwesomeIcon)`
  color: red;
  cursor: pointer;
  padding: 2px 0 0 5px;
`;

const UserBadge = () => {
  const username = useAppSelector((state) => state.auth.username);
  const { t } = useTranslation();
  const { auth } = useContext(FirebaseContext);

  const login = () => {
    void auth.signInWithGoogle();
  };

  const logout = () => {
    void auth.logout();
  };

  return (
    <Navbar.Text>
      {username ? (
        <div>
          {username}
          <OverlayTrigger
            key={"logout"}
            placement={"bottom"}
            overlay={<Tooltip id={`tooltip-logout`}>{t("logout")}</Tooltip>}
          >
            <span>
              <LogoutIcon icon={faSignOutAlt} onClick={logout} />
            </span>
          </OverlayTrigger>
        </div>
      ) : (
        <Button variant="outline-success" onClick={login}>
          {t("login")}
        </Button>
      )}
    </Navbar.Text>
  );
};

export default UserBadge;
