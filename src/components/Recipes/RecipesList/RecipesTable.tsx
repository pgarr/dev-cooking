import { Table } from "react-bootstrap";
import styled from "styled-components";

import RecipeRow from "./RecipeRow";
import { Recipe } from "../../../types";

const StyledTable = styled(Table)`
  border-top: solid 1px;
`;

interface RecipesTableProps {
  recipes: Recipe[];
  onSelectRecipe: (id: number) => void;
}

const RecipesTable = ({ recipes, onSelectRecipe }: RecipesTableProps) => {
  return (
    <StyledTable hover>
      <tbody>
        {recipes.map((recipe) => {
          return (
            <RecipeRow
              {...recipe}
              key={recipe.id}
              onClick={() => {
                onSelectRecipe(recipe.id);
              }}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default RecipesTable;
