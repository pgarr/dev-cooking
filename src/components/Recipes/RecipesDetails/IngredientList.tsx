import { useTranslation } from "react-i18next";
import { toLower } from "lodash";
import { Ingredient } from "../../../types";

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: IngredientListProps) => {
  const { t } = useTranslation();
  return (
    <div className="mx-5">
      <h3>{t("ingredients_head")}</h3>
      <div className="flex min-w-sm flex-col">
        {ingredients.map((ingredient, index) => {
          return (
            <div className="mb-4 flex flex-row" key={index}>
              <div className="flex-3">{ingredient.title}</div>
              <div className="flex-1">{`${ingredient.amount || ""} ${toLower(
                ingredient.unit,
              )}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngredientList;
