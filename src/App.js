import React from 'react';

import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
