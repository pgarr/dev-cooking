import CategoryIcon from "./CategoryIcon";

const CategoriesBar = ({ categories, className }) => {
  const localCategories = [...categories];
  localCategories.sort();

  return (
    <div className={className}>
      {localCategories.map((category, index) => {
        return (
          <CategoryIcon categoryName={category} key={index}></CategoryIcon>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
