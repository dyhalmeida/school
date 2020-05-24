import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { get } from 'lodash';
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

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Students</Title>
      <StudentsContainer>
        {students.map((student) => (
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
            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentsContainer>
    </Container>
  );
}

export default Students;
