import React from "react";
import { connect } from "react-redux";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipesTable from "./RecipesTable/RecipesTable";

const RecipesList = ({ recipes, history }) => {
  const recipeSelectedHandler = (id) => {
    history.push({ pathname: "/recipes/" + id });
  };

  return (
    <LoadingContainer isLoading={false}>
      <RecipesTable recipes={recipes} onSelectRecipe={recipeSelectedHandler} />
    </LoadingContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps)(RecipesList);
