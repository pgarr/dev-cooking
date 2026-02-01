import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toLower } from "lodash";

import LoadingContainer from "../hoc/loadingContainer";
import { Recipe } from "../../types";
import FiltersBar from "@/components/fragments/filtersBar";
import RecipesTable from "@/components/fragments/recipesTable";
import { RecipesContext } from "../context/recipesContext";
import { FiltersContext } from "../context/filtersContext";

const isCategoriesMatched = (
  categoriesFiltered: { value: string; label: string }[],
  recipeCategories: string[],
) => {
  if (categoriesFiltered.length === 0) return true;
  const categoriesValues = categoriesFiltered.map((category) => category.value);
  return recipeCategories.some(
    (category) => categoriesValues.indexOf(category) >= 0,
  );
};

const RecipesList = () => {
  const navigate = useNavigate();
  const { state, loading } = useContext(RecipesContext);
  const { name: nameFilter, categories: categoriesFilter } =
    useContext(FiltersContext);

  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const recs = state.recipes.filter(
      (recipe) =>
        toLower(recipe.title).includes(toLower(nameFilter)) &&
        isCategoriesMatched(categoriesFilter, recipe.categories),
    );
    setFilteredRecipes(recs);
  }, [state.recipes, nameFilter, categoriesFilter]);

  const recipeSelectedHandler = (id: number) => {
    void navigate("/recipes/" + id.toString());
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
