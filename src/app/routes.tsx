import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../components/ui/spinner";

const RecipesList = lazy(() => import("../components/pages/recipesList"));
const Home = lazy(() => import("../components/pages/home"));
const RecipeDetails = lazy(() => import("../components/pages/recipeDetails"));

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
