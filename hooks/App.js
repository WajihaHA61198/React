import './App.css';
// Hooks---> useState, useEffect
import React, { useState, useEffect } from 'react';
import FormHookSub from './FormHookSub';

function App() {
  // useState 
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () => {
    alert(`My name is ${name}\nI live in ${country}`)
  }



  // Form handling with hooks
  return (
    <div className="App">
      <header className="App-header">

        <h4>Enter your name:</h4>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

        <h4>Enter your country:</h4>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>

        <br />
        <button onClick={handleSubmit}>Submit</button>
        <hr />

        <FormHookSub/>
      </header>
    </div>
  );
}

export default App;
