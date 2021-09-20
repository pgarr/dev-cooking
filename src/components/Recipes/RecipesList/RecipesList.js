import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toLower } from "lodash";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import FiltersBar from "./FiltersBar";
import RecipesTable from "./RecipesTable";

const RecipesList = ({ loading, recipes, history, nameFilter }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    const recs = recipes.filter((recipe) =>
      toLower(recipe.title).includes(toLower(nameFilter))
    );
    setFilteredRecipes(recs);
  }, [recipes, nameFilter]);

  const recipeSelectedHandler = (id) => {
    history.push({ pathname: "/recipes/" + id });
  };

  return (
    <LoadingContainer isLoading={loading}>
      <FiltersBar />
      <RecipesTable
        recipes={filteredRecipes}
        onSelectRecipe={recipeSelectedHandler}
      />
    </LoadingContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
    nameFilter: state.filters.name,
  };
};

export default connect(mapStateToProps)(RecipesList);
