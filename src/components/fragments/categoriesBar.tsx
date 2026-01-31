import CategoryIcon from "./categoryIcon";

interface CategoriesBarProps {
  categories: string[];
  className?: string;
}

const CategoriesBar = ({ categories, className }: CategoriesBarProps) => {
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
