import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import IngredientRow from "./IngredientRow";

const IngredientList = ({ className, ingredients }) => {
  const { t } = useTranslation("translation", { keyPrefix: "ingredients" });
  return (
    <Table className={className} hover>
      <thead>
        <tr>
          <th scope="col">{t("name")}</th>
          <th scope="col">{t("amount")}</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, index) => {
          return <IngredientRow key={index} {...ingredient} />;
        })}
      </tbody>
    </Table>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientList;
