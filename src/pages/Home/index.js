import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";
import signin from "../../assets/signin.svg";


import data from "../../data/data.json";

export default function Home() {
  const [tutoriais, setTutoriais] = useState([]);

  useEffect(() => {
    setTutoriais(data);
    console.table(tutoriais);
  }, [tutoriais]);

  return (
    <Container>
      <header className="main-header">
        <h1>Tomorrowland</h1>
      </header>

        

      <nav>
        
        <Link className="link" to="/login">
          <img src={signin} alt="Login" />
          <p>login</p>
        </Link>
      </nav>
    </Container>
  );
}
