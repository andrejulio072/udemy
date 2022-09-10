import React from "react";

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

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>{this.state.numero}</p>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default Contador;
