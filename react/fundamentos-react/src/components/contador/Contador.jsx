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
  setPasso = (novoPasso) => {
    this.setState({ passo: novoPasso });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>{this.state.numero}</p>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input value={this.state.passo}
          onChange={e => this.setState({ passo: +e.target.value })}
          id="passoInput"
          type="number" /> <br />
          </div>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default Contador;
