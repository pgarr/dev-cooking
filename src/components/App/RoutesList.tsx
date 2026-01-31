import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../ui/spinner";

const RecipesList = lazy(() => import("../Recipes/RecipesList/RecipesList"));
const Home = lazy(() => import("../Home/Home"));
const RecipeDetails = lazy(
  () => import("../Recipes/RecipesDetails/RecipeDetails"),
);

const RoutesList = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesList;
