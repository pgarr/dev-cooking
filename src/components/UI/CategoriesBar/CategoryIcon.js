import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faCookie,
  faGlassMartini,
  faHotdog,
  faSeedling,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Span = styled.span`
  margin: 0 5px;
`;

const iconMap = {
  main: faUtensils,
  snack: faHotdog,
  vegetarian: faSeedling,
  drink: faGlassMartini,
  sweet: faCookie,
  spicy: faPepperHot,
};

const CategoryIcon = ({ categoryName }) => {
  const { t } = useTranslation("translation", { keyPrefix: "categories" });

  return (
    <Span>
      <OverlayTrigger
        key={categoryName}
        placement={"top"}
        overlay={
          <Tooltip id={`tooltip-${categoryName}`}>{t(categoryName)}</Tooltip>
        }
      >
        <FontAwesomeIcon icon={iconMap[categoryName]} />
      </OverlayTrigger>
    </Span>
  );
};

export default CategoryIcon;
