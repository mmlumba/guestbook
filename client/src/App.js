import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuestBook from './GuestBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Guestbook
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
      <GuestBook />
    </div>
  );
}

export default App;
