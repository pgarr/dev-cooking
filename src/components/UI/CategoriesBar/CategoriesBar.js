import CategoryIcon from "./CategoryIcon";

const CategoriesBar = ({ categories, className }) => {
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
