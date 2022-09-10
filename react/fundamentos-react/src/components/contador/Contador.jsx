import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: this.props.numeroInicial || 0,
    };
  }
  incrementar = () => {
    this.setState({ numero: this.state.numero + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>{this.state.numero}</p>
      </div>
    );
  }
}

export default Contador;
