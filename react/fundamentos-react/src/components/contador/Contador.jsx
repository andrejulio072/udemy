import React from "react";

class Contador extends React.Component {
  state = {
    numero: 0,
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Valor Inicial: {this.props.numeroInicial}</p>
      </div>
    );
  }
}

export default Contador;
