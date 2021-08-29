import React from "react";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import NumberedPagination from "../../UI/NumberedPagination/NumberedPagination";
import RecipesTable from "./RecipesTable/RecipesTable";

const RecipesList = ({ history }) => {
  const recipeSelectedHandler = (id) => {
    history.push({ pathname: "/recipes/" + id });
  };

  return (
    <LoadingContainer isLoading={false}>
      <RecipesTable recipes={[]} onSelectRecipe={recipeSelectedHandler} />
      <NumberedPagination activePage={1} totalPages={1} />
    </LoadingContainer>
  );
};

export default RecipesList;
