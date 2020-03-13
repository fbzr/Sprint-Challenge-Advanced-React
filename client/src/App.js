import React, { Fragment } from 'react';
import SearchesList from './components/SearchesList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <h1>App</h1>
      <SearchesList />
    </Container>
  );
}

export default App;
