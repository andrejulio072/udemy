import React from "react";

export default (props) => {
  return (
    <div>
      Seja bem vindo <strong>{props.usuario.nome}</strong>!
    </div>
  );
};
