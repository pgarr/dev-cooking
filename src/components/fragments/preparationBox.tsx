import { useTranslation } from "react-i18next";

interface PreparationBoxProps {
  preparation: string;
}

const PreparationBox = ({ preparation }: PreparationBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className="mx-2.5 my-0">
      <h3>{t("preparation")}</h3>
      <p className="text-justify">{preparation}</p>
    </div>
  );
};

export default PreparationBox;
