import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const RecipesList = ({ history }) => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const nameFilter = useSelector((state) => state.filters.name);
  const categoriesFilter = useSelector((state) => state.filters.categories);

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

export default RecipesList;
