import React from "react";
import "./App.css";

import Card from "./components/layout/Card";

import ParOuImpar from "./components/condicional/ParOuImpar";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos />
        </Card>

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
