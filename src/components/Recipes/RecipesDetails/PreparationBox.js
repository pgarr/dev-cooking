import React from "react";
import { useTranslation } from "react-i18next";

const PreparationBox = ({ preparation }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("preparation")}</h3>
      <p>{preparation}</p>
    </div>
  );
};

export default PreparationBox;
