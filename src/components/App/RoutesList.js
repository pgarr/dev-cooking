import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RecipesList from "../Recipes/RecipesList/RecipesList";
import Home from "../Home/Home";
import RecipeDetails from "../Recipes/RecipesDetails/RecipeDetails";

const RoutesList = () => {
  return (
    <Switch>
      <Route path="/recipes" exact component={RecipesList} />
      <Route path="/recipes/:id" component={RecipeDetails} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default RoutesList;
