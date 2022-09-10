import React from "react";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Buttons from "./Buttons";

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: this.props.numeroInicial || 0,
      passo: this.props.passoInicial || 5,
    };

  }
  incrementar = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };
  decrementar = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };
  setPasso = (novoPasso) => {
    this.setState({ passo: novoPasso });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Buttons incrementar={this.incrementar} decrementar={this.decrementar} />

      </div>
    );
  }
}

export default Contador;
