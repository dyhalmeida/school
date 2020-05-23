import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
// import axios from '../../services/axios';
// import history from '../../services/history';
import * as actions from '../../store/auth/actions';

function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let error = false;

    if (!isEmail(email)) {
      error = true;
      toast.error('E-mail inválido');
    }

    if (password.length <= 3 || password.length > 8) {
      error = true;
      toast.error('Senha deve ter entre 3 e 10 caracteres');
    }

    if (error) return;

    dispatch(
      actions.loginRequest({
        email,
        password,
        prevPath,
      })
    );
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="name"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default Login;
