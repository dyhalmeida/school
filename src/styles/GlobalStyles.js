import styled, { createGlobalStyle } from 'styled-components';
import Colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${Colors.primaryDark};
    color: ${Colors.primaryDark};
  }

  html, body, root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${Colors.primary};
    border: none;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${Colors.primary};
  }

  ul {
    list-style: none;
  }

  /* Customização de cores do Toastify */
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${Colors.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${Colors.error};
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #ffffff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
