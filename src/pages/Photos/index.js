import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/auth/actions';

import Loading from '../../components/Loading';

function Photos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        setPhoto(get(data, 'Files[0].url', ''));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    })();
  }, [id]);

  const handleChange = async (e) => {
    const newPhoto = e.target.files[0];
    const photoUrl = URL.createObjectURL(newPhoto);
    setPhoto(photoUrl);

    const form = new FormData();
    form.append('file', newPhoto);
    form.append('student', id);

    const header = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      setIsLoading(true);
      axios.post('/files', form, header);
      setIsLoading(false);
      toast.success('Foto enviada com sucesso');
    } catch (error) {
      setIsLoading(false);
      const status = get(error, 'response.status', '');
      toast.error('Erro ao enviar foto');
      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Upload Foto</Title>
      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="Foto" /> : 'Selecionar'}
          <input type="file" name="photo" id="photo" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Photos;
