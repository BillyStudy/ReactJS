import React from 'react'
import style from  './style/style.css'
//import Api from  './services/api'

import Header from './components/Header/index'
import Main from './pages/main/index'
//Componentes
import './style/style.css'

function App() {
  
  return (
    <div className="App" style={style.body}>
        <Header page="Home" />
        <Main/>
    </div>
  );
}

export default App;
