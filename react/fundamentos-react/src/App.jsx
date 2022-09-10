import React from "react";
import "./App.css";

import Contador from "./components/contador/Contador";
import Card from "./components/layout/Card";
import Input from "./components/formulario/Input";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Mega from "./components/megasena/Mega";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Desafio Mega Sena" color="#B9006E">
        <Mega />


      </Card>

    <Card titutlo="#12 - Contador" color="#424242">
      <Contador numeroInicial={100}  />
    </Card>


      <Card titutlo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input />
      </Card>

      <Card titutlo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
      </Card>

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
