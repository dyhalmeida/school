import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';
import { Title, StudentsContainer, ProfilePicture } from './styled';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const { data } = await axios.get('/students');
      setStudents(data);
    }
    getStudents();
  }, []);

  return (
    <Container>
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
