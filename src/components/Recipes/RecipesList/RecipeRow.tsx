import CategoriesBar from "../../UI/CategoriesBar/CategoriesBar";

const RecipeRow = ({ title, time, categories, clicked }) => {
  return (
    <tr onClick={clicked}>
      <td>{title}</td>
      <td>
        <CategoriesBar categories={categories}></CategoriesBar>
      </td>
      <td>{time ? time + "'" : null}</td>
    </tr>
  );
};

export default RecipeRow;
