import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let error = false;

    if (name.length <= 3 || name.length > 30) {
      error = true;
      toast.error('Nome deve ter entre 3 e 30 caracteres');
    }

    if (!isEmail(email)) {
      error = true;
      toast.error('E-mail inválido');
    }

    if (password.length <= 3 || password.length > 8) {
      error = true;
      toast.error('Senha deve ter entre 3 e 10 caracteres');
    }

    if (error) return;

    try {
      await axios.post('/users', {
        name,
        email,
        password,
      });
      toast.success('Conta criada com sucesso');

      /** Roteia para página de login */
      history.push('/login');
    } catch (err) {
      // const status = get(err, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);
      errors.forEach((errorText) => toast.error(errorText));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}

export default Register;
