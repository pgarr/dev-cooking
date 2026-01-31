import { createContext, PropsWithChildren, useState } from "react";
import { noop } from "lodash";
import { Recipe } from "@/types";
import { prepareData } from "@/lib/helpers";

interface RecipesState {
  recipes: Recipe[];
  ingredients: string[];
  categories: string[];
}

interface RecipesContextType {
  state: RecipesState;
  setData: (data: Recipe[]) => void;
}

export const RecipesContext = createContext<RecipesContextType>({
  state: { recipes: [], ingredients: [], categories: [] },
  setData: noop,
});

export const RecipesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<RecipesState>({
    recipes: [],
    ingredients: [],
    categories: [],
  });

  const setData = (data: Recipe[]) => {
    setState(prepareData(data));
  };

  return (
    <RecipesContext.Provider
      value={{
        state,
        setData,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
