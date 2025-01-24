import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { toLower } from "lodash";
import { Ingredient } from "../../../types";

const Container = styled.div`
  margin: 0 20px;
`;
const Table = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  width: auto;

  @media only all and (min-width: 1000px) {
    min-width: 400px;
  }
`;

const Cell = styled.div`
  line-height: 1;
  margin-bottom: 15px;
  min-width: 100px;

  @media only all and (max-width: 420px) {
    min-width: 80px;
  }
`;

const TitleCell = styled(Cell)`
  flex: 3 1 70%;
  padding-right: 10px;

  @media only all and (max-width: 420px) {
    flex: 3 1 55%;
`;

const AmountCell = styled(Cell)`
  flex: 1 1 30%;

  @media only all and (max-width: 420px) {
    flex: 1 1 45%;
`;

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: IngredientListProps) => {
  const { t } = useTranslation();
  return (
    <Container>
      <h3>{t("ingredients_head")}</h3>
      <Table>
        {ingredients.map((ingredient, index) => {
          return (
            <React.Fragment key={index}>
              <TitleCell>{ingredient.title}</TitleCell>
              <AmountCell>{`${ingredient.amount || ""} ${toLower(
                ingredient.unit,
              )}`}</AmountCell>
            </React.Fragment>
          );
        })}
      </Table>
    </Container>
  );
};

export default IngredientList;
