import styled from 'styled-components';
import Colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    margin-top: 5px;
    height: 32px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid ${Colors.primaryDark};
    font-size: 15px;
/*
    &:focus {
      border: 1px solid ${Colors.primaryDark};
    } */
  }
`;
