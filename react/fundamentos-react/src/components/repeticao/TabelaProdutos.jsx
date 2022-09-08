/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
