import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

import Encuestas from './components/Encuestas';

function App() {
  const encuestas = [
    {
      id: 1,
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Azul', 'Verde']
    },
    {
      id: 2,
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Pizza', 'Hamburguesa', 'Sushi']
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <h1>Aplicación de Encuestas</h1>
          {/* <Contenido de las encuestas /> */}
          <Encuestas encuestas={encuestas} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
