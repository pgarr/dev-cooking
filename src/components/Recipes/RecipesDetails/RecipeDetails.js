import React from "react";
import { connect } from "react-redux";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeDetails = ({ loading, recipes, match }) => {
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === match.params.id
  );

  return (
    <LoadingContainer isLoading={loading}>
      <RecipeCard recipe={selectedRecipe} />
    </LoadingContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps)(RecipeDetails);
