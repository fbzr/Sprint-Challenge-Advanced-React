import React, { Fragment } from 'react';
import SearchesList from './components/SearchesList';
import { Container } from '@material-ui/core';
import DarkModeToggle from './components/DarkModeToggle';
import './App.scss';
import Chart from './components/Chart';

function App() {
  return (
    <Container>
      <h1>App</h1>
      <DarkModeToggle />
      <SearchesList />
      <Chart />
    </Container>
  );
}

export default App;
