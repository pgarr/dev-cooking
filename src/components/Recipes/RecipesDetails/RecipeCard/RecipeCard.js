import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./RecipeCard.module.css";
import IngredientList from "./IngredientList/IngredientList";
import PreparationBox from "./PreparationBox/PreparationBox";
import CategoriesBar from "../../../UI/CategoriesBar/CategoriesBar";

const RecipeCard = ({ recipe }) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h2>{recipe.title}</h2>
        </Col>
      </Row>
      <Row>
        {
          <Col xs={2}>
            <CategoriesBar categories={recipe.categories}></CategoriesBar>
          </Col>
        }
        {recipe.time ? (
          <Col xs={2}>
            <FontAwesomeIcon icon="clock" /> {recipe.time}'
          </Col>
        ) : null}
      </Row>
      <Row className={styles.Data}>
        {recipe.ingredients.length > 0 ? (
          <Col xs lg="4">
            <IngredientList ingredients={recipe.ingredients} />
          </Col>
        ) : null}
        <Col xs lg="8">
          {recipe.preparation && (
            <PreparationBox preparation={recipe.preparation} />
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RecipeCard;
