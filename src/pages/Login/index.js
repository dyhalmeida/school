import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

function Login() {
  const dispath = useDispatch();

  function handleOk(e) {
    e.preventDefault();

    // Dispara uma ação para o reducer
    dispath({
      type: 'BUTTON_CLICKED',
      payload: { name: 'Diego Almeida', email: 'dyhalmeida@gmail.com' },
    });
  }

  return (
    <Container>
      <Title>Login Page</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
        nobis. Suscipit esse eius vel, sit minima accusamus unde iure quo
        consequatur commodi reiciendis veritatis nihil et explicabo expedita
        distinctio officia?
      </p>
      <button type="button" onClick={handleOk}>
        OK
      </button>
    </Container>
  );
}

export default Login;
