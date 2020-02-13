import React from 'react'
//import Api from  './services/api'

import Header from './components/Header/index'
//Componentes
import './style/style.css'

import Routes from './routes';
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Header page="Home" />
        <div id="container"> 
          <Routes/>
        </div>
       
    </div>
  );
}

export default App;
