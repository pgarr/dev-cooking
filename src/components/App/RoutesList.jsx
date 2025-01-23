import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipesList = lazy(() => import("../Recipes/RecipesList/RecipesList"));
const Home = lazy(() => import("../Home/Home"));
const RecipeDetails = lazy(() =>
  import("../Recipes/RecipesDetails/RecipeDetails")
);

const RoutesList = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="recipes" exact element={<RecipesList />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesList;
