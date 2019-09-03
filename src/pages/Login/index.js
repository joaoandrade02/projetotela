import React from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <form>
        <label htmlFor="e-mail">E-mail:</label>
        <input type="e-mail"/>
        <br>
        </br>
        <label htmlFor="senha">Senha:</label>
        <input type="password"/>
        <br>
        </br>
        <button type="submit">Entrar</button>
        <br>
        </br>
        <button><Link to ="/Recup">Esqueci minha senha</Link></button>
        <br>
        </br>
        <button><Link to ="/Cadast">Não possuo cadastro</Link></button>
        <br></br>
        <Link to="/">
          <p>
            Voltar para página inicial
          </p>
        </Link>
      </form>

      <Link className="link" to="/">
        </Link>

        <Link className="link" to="/login">
        
        </Link>
        
    </Container>
  );
}
