import React from "react";
import { toLower } from "lodash";
import styled from "styled-components";

const AmountCell = styled.td`
  min-width: 80px;
`;

const IngredientRow = ({ title, amount, unit }) => {
  const lowerCaseUnit = toLower(unit);
  return (
    <tr>
      <td>{title}</td>
      <AmountCell>
        {amount ? `${amount} ${lowerCaseUnit}` : lowerCaseUnit}
      </AmountCell>
    </tr>
  );
};

export default IngredientRow;
