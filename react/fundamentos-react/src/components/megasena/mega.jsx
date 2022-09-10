import React from 'react'

export default props => {
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumerosNaoContidos(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }
    return (
        <div>
            <h2>Mega</h2>
            <h3>{props.numero}</h3>
        </div>
    )
}
