import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import IngredientRow from "./IngredientRow";

const IngredientList = ({ className, ingredients }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("ingredients_head")}</h3>
      <Table className={className} hover>
        <tbody>
          {ingredients.map((ingredient, index) => {
            return <IngredientRow key={index} {...ingredient} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientList;
