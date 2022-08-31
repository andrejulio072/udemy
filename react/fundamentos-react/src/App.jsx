import React from "react";
import "./App.css";

import Card from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Desafio Repetição" color="#3A9AD9">
        <ListaAlunos />
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#008BBA"></Card>

      <Card titulo="#07 - Desafio Repetição" color="#D96459"></Card>

      <Card titulo="#06 - Repetição" color="#FF85CB">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#8BAD39">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73"></Card>
    </div>
  </div>
);
