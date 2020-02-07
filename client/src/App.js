import React from 'react';
import './App.css';
import GuestBook from './GuestBook';
import GuestInput from './GuestInput'
import { Typography } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Typography variant="h3">Guestbook</Typography>
      <Typography variant="body1">Please leave constructive comments only :)</Typography>
      <GuestInput />
      <GuestBook />
    </div>
  );
}

export default App;
