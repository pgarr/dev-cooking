import { lowerCase } from "lodash";
import React from "react";

const IngredientRow = ({ title, amount, unit }) => {
  // const lowerCaseUnit = lowerCase(unit); //TODO: removes polish letters
  return (
    <tr>
      <td>{title}</td>
      <td>{amount ? `${amount} ${unit}` : unit}</td>
    </tr>
  );
};

export default IngredientRow;
