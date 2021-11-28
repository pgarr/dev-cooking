import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { toLower } from "lodash";

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

const IngredientList = ({ className, ingredients }) => {
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
                ingredient.unit
              )}`}</AmountCell>
            </React.Fragment>
          );
        })}
      </Table>
    </Container>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientList;
