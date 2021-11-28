import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toLower } from "lodash";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import FiltersBar from "./FiltersBar";
import RecipesTable from "./RecipesTable";

const isCategoriesMatched = (categoriesFiltered, recipeCategories) => {
  if (categoriesFiltered.length === 0) return true;
  const categoriesValues = categoriesFiltered.map((category) => category.value);
  return recipeCategories.some(
    (category) => categoriesValues.indexOf(category) >= 0
  );
};

const RecipesList = ({
  loading,
  recipes,
  history,
  nameFilter,
  categoriesFilter,
  ingredientsFilter,
}) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    const recs = recipes.filter(
      (recipe) =>
        toLower(recipe.title).includes(toLower(nameFilter)) &&
        isCategoriesMatched(categoriesFilter, recipe.categories)
    );
    setFilteredRecipes(recs);
  }, [recipes, nameFilter, categoriesFilter]);

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
    categoriesFilter: state.filters.categories,
    ingredientsFilter: state.filters.ingredientsHas,
  };
};

export default connect(mapStateToProps)(RecipesList);
