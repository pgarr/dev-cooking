import { TableCell, TableRow } from "@/components/ui/table";
import CategoriesBar from "../../UI/CategoriesBar/CategoriesBar";

interface RecipeRowProps {
  title: string;
  time: number;
  categories: string[];
  onClick: () => void;
}

const RecipeRow = ({ title, time, categories, onClick }: RecipeRowProps) => {
  return (
    <TableRow onClick={onClick} className="cursor-pointer">
      <TableCell>{title}</TableCell>
      <TableCell>
        <CategoriesBar categories={categories}></CategoriesBar>
      </TableCell>
      <TableCell>{time ? `${time.toString()}'` : null}</TableCell>
    </TableRow>
  );
};

export default RecipeRow;
