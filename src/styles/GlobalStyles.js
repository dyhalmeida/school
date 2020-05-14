import { createGlobalStyle } from 'styled-components';
import Colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${Colors.primary};
    color: ${Colors.primary};
  }

  html, body, root {
    height: 100%;
  }

  button: {
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
`;
