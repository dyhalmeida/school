import styled from 'styled-components';

export const Title = styled.h1`
  ::after {
    content: '';
    display: block;
    background-color: #eee;
    width: 50px;
    border: 3px solid #eee;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const StudentsContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;
