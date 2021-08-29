import React from "react";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeDetails = ({ match }) => {
  return (
    <LoadingContainer isLoading={false}>
      <RecipeCard recipe={{}} />
    </LoadingContainer>
  );
};

export default RecipeDetails;
