import { useContext } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import BrandIcon from "./brandIcon";
import { Button } from "../ui/button";
import UserBadge from "./userBadge";
import { FirebaseContext } from "@/firebase/firebaseContext";

const Toolbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { auth } = useContext(FirebaseContext);

  const handleSelect = (eventKey: string | null) => {
    switch (eventKey) {
      case "recipes":
        void navigate("/recipes");
        break;
      case "login":
        void auth.signInWithGoogle();
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex flex-row py-2 px-2 md:px-15 justify-between h-8">
      <div className="flex flex-row gap-10">
        <BrandIcon />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            handleSelect("recipes");
          }}
        >
          {t("recipes")}
        </Button>
      </div>
      <UserBadge />
    </div>
  );
};

export default Toolbar;
