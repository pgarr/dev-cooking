import RecipeRow from "./RecipeRow";
import { Recipe } from "../../../types";
import { Table, TableBody } from "@/components/ui/table";

interface RecipesTableProps {
  recipes: Recipe[];
  onSelectRecipe: (id: number) => void;
}

const RecipesTable = ({ recipes, onSelectRecipe }: RecipesTableProps) => {
  return (
    <Table>
      <TableBody>
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
      </TableBody>
    </Table>
  );
};

export default RecipesTable;
