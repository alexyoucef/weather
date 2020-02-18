import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './actions/components/Weather.js';

function App() {
  return (
    <div className="App">
        <Weather />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
