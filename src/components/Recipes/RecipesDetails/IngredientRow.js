import { toLower } from "lodash";
import React from "react";

const IngredientRow = ({ title, amount, unit }) => {
  const lowerCaseUnit = toLower(unit);
  return (
    <tr>
      <td>{title}</td>
      <td>{amount ? `${amount} ${lowerCaseUnit}` : lowerCaseUnit}</td>
    </tr>
  );
};

export default IngredientRow;
