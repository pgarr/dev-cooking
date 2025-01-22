import { useSelector } from "react-redux";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipeCard from "./RecipeCard";

const RecipeDetails = ({ match }) => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === match.params.id
  );
  return (
    <LoadingContainer isLoading={loading}>
      <RecipeCard recipe={selectedRecipe} />
    </LoadingContainer>
  );
};

export default RecipeDetails;
