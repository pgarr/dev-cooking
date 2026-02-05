import { TableCell, TableRow } from "@/components/ui/table";
import CategoriesBar from "./categoriesBar";

interface RecipeRowProps {
  title: string;
  time: number;
  categories: string[];
  onClick: () => void;
}

const RecipeRow = ({ title, time, categories, onClick }: RecipeRowProps) => {
  return (
    <TableRow onClick={onClick} className="cursor-pointer">
      <TableCell className="text-wrap whitespace-break-spaces">
        {title}
      </TableCell>
      <TableCell>
        <CategoriesBar categories={categories} />
      </TableCell>
      <TableCell>{time ? `${time.toString()}'` : null}</TableCell>
    </TableRow>
  );
};

export default RecipeRow;
