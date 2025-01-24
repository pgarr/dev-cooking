import CategoriesBar from "../../UI/CategoriesBar/CategoriesBar";

interface RecipeRowProps {
  title: string;
  time: number;
  categories: string[];
  onClick: () => void;
}

const RecipeRow = ({ title, time, categories, onClick }: RecipeRowProps) => {
  return (
    <tr onClick={onClick}>
      <td>{title}</td>
      <td>
        <CategoriesBar categories={categories}></CategoriesBar>
      </td>
      <td>{time ? `${time.toString()}'` : null}</td>
    </tr>
  );
};

export default RecipeRow;
