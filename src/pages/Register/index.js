import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../store/auth/actions';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';

function Register() {
  const { id, name: userName, email: userEmail } = useSelector(
    (state) => state.auth.user
  );

  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;
    setName(userName);
    setEmail(userEmail);
  }, [id, userName, userEmail]);

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

    if (!id && (password.length <= 3 || password.length > 8)) {
      error = true;
      toast.error('Senha deve ter entre 3 e 10 caracteres');
    }

    if (error) return;

    dispatch(
      actions.registerRequest({
        id,
        name,
        email,
        password,
      })
    );
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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
        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}

export default Register;
