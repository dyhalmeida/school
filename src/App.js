import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
