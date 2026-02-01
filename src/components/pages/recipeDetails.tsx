import { useParams } from "react-router";

import LoadingContainer from "../hoc/loadingContainer";
import RecipeCard from "../fragments/recipeCard";
import { useContext } from "react";
import { RecipesContext } from "../context/recipesContext";

const RecipeDetails = () => {
  const { state, loading } = useContext(RecipesContext);
  const recipes = state.recipes;
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
