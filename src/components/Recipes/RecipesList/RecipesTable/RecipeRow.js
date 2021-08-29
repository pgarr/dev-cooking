import React from "react";

import DifficultySymbol from "../../../UI/DifficultySymbol/DifficultySymbol";

const RecipeRow = ({ index, title, time, difficulty, clicked, status }) => {
  return (
    <tr onClick={clicked}>
      <th scope="row">{index}</th>
      <td>{title}</td>
      <td>{time ? time + "'" : null}</td>
      <td>
        {difficulty ? <DifficultySymbol difficulty={difficulty} /> : null}
      </td>
    </tr>
  );
};

export default RecipeRow;
