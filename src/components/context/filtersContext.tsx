import { noop } from "lodash";
import { createContext, useState } from "react";

interface FiltersContextType {
  name: string;
  categories: { value: string; label: string }[];
  filterName: (name: string) => void;
  filterCategories: (categories: { value: string; label: string }[]) => void;
}

export const FiltersContext = createContext<FiltersContextType>({
  name: "",
  categories: [],
  filterName: noop,
  filterCategories: noop,
});

export const FiltersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);

  return (
    <FiltersContext.Provider
      value={{
        name,
        categories,
        filterName: setName,
        filterCategories: setCategories,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
