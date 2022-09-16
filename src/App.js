import { Component } from 'react';
import './App.css';

// Composant PHT
// function Pht() {}
const Pht = () => {
  return <div className='from_control'>
      <label htmlFor='pht'>Prix Hors taxe : </label>
      <input type='number' id='pht' placeholder='donner votre pht ...'/>
  </div>;
}

// Composant TVA
const Tva = () => {
  return <div className='from_control'>
      <label>Taux TVA : </label>
      <input type='number' id='tva' placeholder='donner votre tva ...'/>
  </div>;
}

// Composant Buttons
const Buttons = () => {
  return <div className='from_button'>
      <button>Calculer</button>
      <button>Initialiser</button>
  </div>;
}

// Composant Res
const Res = () => {
  return <div className='from_control'>
      <label>Resultat : </label>
      <input type='number' id='res' readOnly/>
  </div>;
}
function App() {
  return (
    <div>
      <Pht />
      <Tva />
    </div>
  );
}

export default App;
