import CategoryIcon from "./CategoryIcon";

const CategoriesBar = ({ categories }) => {
  return categories.map((category, index) => {
    return <CategoryIcon categoryName={category} key={index}></CategoryIcon>;
  });
};

export default CategoriesBar;
