// src/App.js
import React from 'react';
import Calculator from './Calculator.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Made by Valentin Henriques</p>
      </footer>
    </div>
  );
}

export default App;
