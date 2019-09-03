import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Recup from './pages/Recup';
import Cadast from './pages/Cadast';

export default function Routes () {
  return (
    <BrowserRouter>
     <Route exact path="/" component={Home}/>

     <Route path="/login" component={Login}/>

     <Route path="/Recup" component={Recup}/>

     <Route path="/Cadast" component={Cadast}/>
    </BrowserRouter>
  
  );
}