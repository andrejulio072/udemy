import React from 'react';


export default function Alunos(props) {
  const alunos = props.alunos;
  return (
    <>
      <ul>
        {alunos.map((aluno) => {
          return <li key={aluno.id}>{aluno.nome}</li>;
        })}
      </ul>
    </>
  );
}
