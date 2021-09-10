import CategoryIcon from "./CategoryIcon";

const CategoriesBar = ({ categories, className }) => {
  categories.sort();

  return (
    <div className={className}>
      {categories.map((category, index) => {
        return (
          <CategoryIcon categoryName={category} key={index}></CategoryIcon>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
