import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import IngredientList from "./IngredientList";
import PreparationBox from "./PreparationBox";
import CategoriesBar from "../../UI/CategoriesBar/CategoriesBar";
import { Recipe } from "../../../types";

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 40px;

  @media only all and (min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const Categories = styled(CategoriesBar)`
  display: inline;
  margin-right: 20px;
`;

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <>
      <h2>{recipe.title}</h2>
      <Categories categories={recipe.categories}></Categories>
      {recipe.time ? (
        <span>
          <FontAwesomeIcon icon={faClock} /> {recipe.time}&apos;
        </span>
      ) : null}
      <Data>
        {recipe.ingredients.length > 0 ? (
          <IngredientList ingredients={recipe.ingredients} />
        ) : null}
        {recipe.preparation && (
          <PreparationBox preparation={recipe.preparation} />
        )}
      </Data>
    </>
  );
};

export default RecipeCard;
