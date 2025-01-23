import { useParams } from "react-router";
import { useSelector } from "react-redux";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipeCard from "./RecipeCard";

const RecipeDetails = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const params = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id == params.id);

  return (
    <LoadingContainer isLoading={loading}>
      <RecipeCard recipe={selectedRecipe} />
    </LoadingContainer>
  );
};

export default RecipeDetails;
