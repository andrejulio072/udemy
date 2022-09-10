import React, { useState } from "react";
import input from "./Input";

export default (props) => {
  const [valor, setValor] = React.useState("Inicial");

  return (
    <div>
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
    </div>
  );
};
