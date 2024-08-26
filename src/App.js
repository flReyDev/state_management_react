import './App.css';
import { UseState } from './components/UseState';
import { ClasState } from './components/ClassState';
import { useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <UseState name="Usestate"/>
      <ClasState name="ClasState"/>
    </div>
  );
}

export default App;
