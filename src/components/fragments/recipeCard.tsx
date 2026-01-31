import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import IngredientList from "./ingredientList";
import PreparationBox from "./preparationBox";
import CategoriesBar from "./categoriesBar";
import { Recipe } from "@/types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <>
      <h2>{recipe.title}</h2>
      <CategoriesBar categories={recipe.categories} className="inline mr-5" />
      {recipe.time ? (
        <span>
          <FontAwesomeIcon icon={faClock} /> {recipe.time}&apos;
        </span>
      ) : null}
      <div className="flex flex-col md:flex-row gap-12 mt-10 md:items-start items-center">
        {recipe.ingredients.length > 0 ? (
          <IngredientList ingredients={recipe.ingredients} />
        ) : null}
        {recipe.preparation && (
          <PreparationBox preparation={recipe.preparation} />
        )}
      </div>
    </>
  );
};

export default RecipeCard;
