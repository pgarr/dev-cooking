import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faCookie,
  faGlassMartini,
  faHotdog,
  faSeedling,
  faUtensils,
  faBottleDroplet,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap: Record<string, IconDefinition> = {
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
    <Tooltip key={categoryName}>
      <TooltipTrigger>
        <FontAwesomeIcon icon={iconMap[categoryName]} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{t(categoryName)}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CategoryIcon;
