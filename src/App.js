import React from 'react'
import style from  './style/style.css'
//import Api from  './services/api'

import Header from './components/Header/index'
import Index from './pages/main/Index'
//Componentes
import './style/style.css'

function App() {
  
  return (
    <div className="App">
        <Header page="Home" />
        <div id="container"> 
          <Index/>
        </div>
       
    </div>
  );
}

export default App;
