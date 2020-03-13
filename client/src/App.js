import React, { Fragment } from 'react';
import SearchesList from './components/SearchesList';
import { Container } from '@material-ui/core';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [test, setTest] = useLocalStorage('test', false);
  
  return (
    <Container>
      <h1>App</h1>
      <SearchesList />
    </Container>
  );
}

export default App;
