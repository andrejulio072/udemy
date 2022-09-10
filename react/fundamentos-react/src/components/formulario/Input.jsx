import React, { useState } from "react";
import input from "./Input";

export default (props) => {
  const [valor, setValor] = React.useState("Inicial");

  function quandoMudar(e){
    console.log(e.target.value);
  }

  return (
    <div className="Input">
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
    </div>
  );
};
