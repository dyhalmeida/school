# Styled Components
```bash
# Instalar Plugin VSCODE
# vscode-styled-components

# Instalar lib styled-components
npm i styled-componentes
```

```javascript
/** Exemplo de uso */

/** styled.js */
import styled from 'styled-components';

export const Title = styled.h1 `
  background-color: ${props => props.isRed ? '#ff0000' : '#cccccc'};
`;

/** Login.js */
import React from 'react';
import { Title } from './styled';

export default function Login() {
  return
  <>
    <Title isRed={false}>Login</Title>
    <p>Hello Login with styled components</p>
  </>
}
```


```javascript
/** Exemplo de aplicação do estilo global */

/** src/styles/GlobalStyles.js */
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: boder-box;
  }

  body {
    font-family: sans-serif;
  }

  html, body, root {
    height: 100%;
  }

  button {
    cursos: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
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

/** src/App.js */
import React from 'react';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
```
