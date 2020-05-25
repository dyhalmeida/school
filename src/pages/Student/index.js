import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/auth/actions';

function Student({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        const file = get(data, 'Files[0].url', '');
        setPhoto(file);
        setName(data.name);
        setEmail(data.email);
        setIsLoading(false);
      } catch (error) {
        // const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.errors', []);
        if (errors.length > 0) {
          errors.map((errorMessage) => toast.error(errorMessage));
          setIsLoading(false);
          history.push('/');
        }
      }
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;

    if (name.length < 3 || name.length > 150) {
      formError = true;
      toast.error('Nome deve conter entre 3 e 150 caracteres');
    }

    if (!isEmail(email)) {
      formError = true;
      toast.error('E-mail inválido');
    }

    if (formError) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/students/${id}`, {
          name,
          email,
        });
        setIsLoading(false);
        toast.success('Aluno(a) editado com sucesso');
      } else {
        await axios.post('/students', { name, email });
        setIsLoading(false);
        toast.success('Aluno(a) criado com sucesso');
        history.push('/');
      }
    } catch (error) {
      const status = get(error, 'response.status', 0);
      const errors = get(error, 'response.data.errors', []);
      setIsLoading(false);
      if (errors.length > 0) {
        errors.map((errorMessage) => toast.error(errorMessage));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>

      {id && (
        <ProfilePicture>
          {photo ? <img src={photo} alt={name} /> : <FaUserCircle size={180} />}
          <Link to={`/photos/${id}`}>
            <FaEdit />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            placeholder="Nome do aluno"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            placeholder="E-mail do aluno"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Student;
