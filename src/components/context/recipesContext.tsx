import {
  createContext,
  PropsWithChildren,
  useState,
  useCallback,
  useMemo,
} from "react";
import { noop, isEqual } from "lodash";
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
  loading: boolean;
}

export const RecipesContext = createContext<RecipesContextType>({
  state: { recipes: [], ingredients: [], categories: [] },
  setData: noop,
  loading: false,
});

export const RecipesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<RecipesState>({
    recipes: [],
    ingredients: [],
    categories: [],
  });

  const setData = useCallback((data: Recipe[]) => {
    setState((prev) => {
      const next = prepareData(data);
      if (isEqual(prev, next)) return prev;
      return next;
    });
  }, []);

  const loading = useMemo(
    () => state.recipes.length === 0,
    [state.recipes.length],
  );

  return (
    <RecipesContext.Provider
      value={{
        state,
        setData,
        loading,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
