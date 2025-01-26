export interface Ingredient {
  title: string;
  amount: string;
  unit: string;
}
export interface Recipe {
  id: number;
  title: string;
  categories: string[];
  time: number;
  ingredients: Ingredient[];
  preparation: string;
}
