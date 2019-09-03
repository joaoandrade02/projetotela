import React from 'react';
// import { Link } from 'react-router-dom';

import { Container } from "./styles";

export default function Cadast () {
  return (
    <Container>
      <form>
        <label htmlFor="e-mail">E-mail:</label>
        <input type="text"/>
        <br></br>
        <label htmlFor="senha">Senha:</label>
        <input type="password"/>
        <br></br>
        <button>Finalizar cadastro</button>

        
      </form>
    </Container>
  );
}

