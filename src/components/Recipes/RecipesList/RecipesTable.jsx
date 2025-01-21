import { Table } from "react-bootstrap";
import styled from "styled-components";

import RecipeRow from "./RecipeRow";

const StyledTable = styled(Table)`
  border-top: solid 1px;
`;

const RecipesTable = ({ recipes, onSelectRecipe }) => {
  return (
    <StyledTable hover>
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
    </StyledTable>
  );
};

export default RecipesTable;
