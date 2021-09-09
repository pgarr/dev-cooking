import React from "react";
import { connect } from "react-redux";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipesTable from "./RecipesTable";

const RecipesList = ({ loading, recipes, history }) => {
  const recipeSelectedHandler = (id) => {
    history.push({ pathname: "/recipes/" + id });
  };

  return (
    <LoadingContainer isLoading={loading}>
      <RecipesTable recipes={recipes} onSelectRecipe={recipeSelectedHandler} />
    </LoadingContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps)(RecipesList);
