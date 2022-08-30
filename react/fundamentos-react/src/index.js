import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";



ReactDOM.render(
  <div id='app'>
    <Primeiro />
    <ComParametro
    titulo="segundo componente"
    subtitulo="Muito Legal"
     valor="Oi" />
  </div>,
  document.getElementById("root")
);
