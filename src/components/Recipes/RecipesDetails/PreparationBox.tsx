import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10px;
`;

const StyledText = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

interface PreparationBoxProps {
  preparation: string;
}

const PreparationBox = ({ preparation }: PreparationBoxProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h3>{t("preparation")}</h3>
      <StyledText>{preparation}</StyledText>
    </Container>
  );
};

export default PreparationBox;
