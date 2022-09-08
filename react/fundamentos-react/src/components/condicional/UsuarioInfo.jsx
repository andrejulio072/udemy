import React from "react";
import If from "./If";

export default (props) => {
  return (
    <div>
      <If test={props.usuario && props.usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong>!
      </If>
    </div>
  );
};
