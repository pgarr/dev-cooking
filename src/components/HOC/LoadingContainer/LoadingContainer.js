import React from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoadingContainer = ({ isLoading, children }) => {
  const { t } = useTranslation();

  const display = isLoading ? (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">{t("loading")}</span>
      </Spinner>
    </div>
  ) : (
    children
  );

  return display;
};

export default LoadingContainer;
