import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoadingSpinner = ({ className }) => {
  const { t } = useTranslation();

  return (
    <Spinner animation="border" role="status" className={className}>
      <span className="sr-only">{t("loading")}</span>
    </Spinner>
  );
};

export default LoadingSpinner;
