import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faCookie,
  faGlassMartini,
  faHotdog,
  faSeedling,
  faUtensils,
  faBottleDroplet,
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
  sauce: faBottleDroplet,
};

interface CategoryIconProps {
  categoryName: string;
}

const CategoryIcon = ({ categoryName }: CategoryIconProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "categories" });

  return (
    <OverlayTrigger
      key={categoryName}
      placement={"top"}
      overlay={
        <Tooltip id={`tooltip-${categoryName}`}>{t(categoryName)}</Tooltip>
      }
    >
      <Span>
        <FontAwesomeIcon icon={iconMap[categoryName]} />
      </Span>
    </OverlayTrigger>
  );
};

export default CategoryIcon;
