import { Table } from "react-bootstrap";

import RecipeRow from "./RecipeRow";

const RecipesTable = ({ recipes, onSelectRecipe }) => {
  return (
    <Table hover>
      <tbody>
        {recipes.map((recipe, index) => {
          return (
            <RecipeRow
              index={index + 1}
              {...recipe}
              key={recipe.id}
              clicked={() => onSelectRecipe(recipe.id)}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default RecipesTable;
