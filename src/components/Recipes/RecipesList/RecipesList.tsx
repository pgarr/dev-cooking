import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toLower } from "lodash";

import LoadingContainer from "../../HOC/LoadingContainer/LoadingContainer";
import FiltersBar from "./FiltersBar";
import RecipesTable from "./RecipesTable";
import { useAppSelector } from "../../../store/store";

const isCategoriesMatched = (
  categoriesFiltered: any[],
  recipeCategories: any[],
) => {
  if (categoriesFiltered.length === 0) return true;
  const categoriesValues = categoriesFiltered.map((category) => category.value);
  return recipeCategories.some(
    (category) => categoriesValues.indexOf(category) >= 0,
  );
};

const RecipesList = () => {
  const navigate = useNavigate();
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const loading = useAppSelector((state) => state.recipes.loading);
  const nameFilter = useAppSelector((state) => state.filters.name);
  const categoriesFilter = useAppSelector((state) => state.filters.categories);

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    const recs = recipes.filter(
      (recipe) =>
        toLower(recipe.title).includes(toLower(nameFilter)) &&
        isCategoriesMatched(categoriesFilter, recipe.categories),
    );
    setFilteredRecipes(recs);
  }, [recipes, nameFilter, categoriesFilter]);

  const recipeSelectedHandler = (id: string) => {
    void navigate("/recipes/" + id);
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
