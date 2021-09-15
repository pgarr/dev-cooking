import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipesList = lazy(() => import("../Recipes/RecipesList/RecipesList"));
const Home = lazy(() => import("../Home/Home"));
const RecipeDetails = lazy(() =>
  import("../Recipes/RecipesDetails/RecipeDetails")
);

const RoutesList = () => {
  return (
    <Suspense fallback={LoadingSpinner}>
      <Switch>
        <Route path="/recipes" exact component={RecipesList} />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default RoutesList;
