import { useParams } from "react-router";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipeCard from "./RecipeCard";
import { useAppSelector } from "../../../store/store";

const RecipeDetails = () => {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const loading = useAppSelector((state) => state.recipes.loading);
  const params = useParams();
  const id = Number(params.id);
  const selectedRecipe = recipes.find((recipe) => recipe.id === id);

  return (
    <LoadingContainer isLoading={loading}>
      {selectedRecipe && <RecipeCard recipe={selectedRecipe} />}
    </LoadingContainer>
  );
};

export default RecipeDetails;
