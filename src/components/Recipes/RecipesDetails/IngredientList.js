import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

import IngredientRow from "./IngredientRow";

const IngredientList = ({ className, ingredients }) => {
  return (
    <Table className={className} hover>
      <thead>
        <tr>
          <th scope="col">Nazwa</th>
          <th scope="col">Ilość</th>
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
