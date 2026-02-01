import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FirebaseContext } from "../../firebase/firebaseContext";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { UserContext } from "../context/userContext";

const UserBadge = () => {
  const { username } = useContext(UserContext);
  const { t } = useTranslation();
  const { auth } = useContext(FirebaseContext);

  const login = () => {
    void auth.signInWithGoogle();
  };

  const logout = () => {
    void auth.logout();
  };

  return (
    <>
      {username ? (
        <div className="flex flex-row items-center gap-2 justify-baseline mt-3">
          <span className="">{username}</span>
          <Tooltip>
            <TooltipTrigger>
              <Button
                size="xs"
                variant="ghost"
                className="p-0"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("logout")}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ) : (
        <Button variant="outline" onClick={login} size="sm">
          {t("login")}
        </Button>
      )}
    </>
  );
};

export default UserBadge;
