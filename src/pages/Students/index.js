import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import { Title, StudentsContainer, ProfilePicture } from './styled';
import Loading from '../../components/Loading';

function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getStudents() {
      setIsLoading(true);
      try {
        const { data } = await axios.get('/students');
        setStudents(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getStudents();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    setIsLoading(true);
    try {
      await axios.delete(`/students/${id}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
    } catch (error) {
      const status = get(error, 'response.status', 0);
      if (status === 401) {
        toast.error('É necessário fazer login');
      } else {
        toast.error('Ocorreu um erro ao tentar excluir aluno');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Students</Title>
      <StudentsContainer>
        {students.map((student, index) => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Files[0].url', false) ? (
                <img src={student.Files[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{student.name}</span>
            <span>{student.email}</span>
            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link
              onClick={handleDeleteAsk}
              to={`/student/${student.id}/delete`}
            >
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation
              onClick={(e) => handleDelete(e, student.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </StudentsContainer>
    </Container>
  );
}

export default Students;
