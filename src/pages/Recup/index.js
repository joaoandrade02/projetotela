import React from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

export default function Recup() {
  return (
    
    <Container>
      
         <header>
        <h1>Recuperação de senha</h1>
        </header>

        <div> 
        <p>
          Para prosseguir, digite seu e-mail. Caso não encontre nossa mensagem, visualize sua caixa de spam.
        </p>
        </div>
        <div> 
      <form>
        <label htmlFor="e-mail">E-mail:</label>
        <input type="text"/>
        
        <button type="submit">Recuperar senha</button>

        <Link to="/">
          <p>
            Voltar para página inicial
          </p>
        </Link>
      </form> 
</div>
    </Container>
  )
}