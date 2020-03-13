import React, { Fragment } from 'react';
import SearchesList from './components/SearchesList';
import { Container } from '@material-ui/core';
import DarkModeToggle from './components/DarkModeToggle';
import './App.scss';

function App() {
  return (
    <Container>
      <h1>App</h1>
      <DarkModeToggle />
      <SearchesList />
    </Container>
  );
}

export default App;
