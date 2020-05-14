import styled from 'styled-components';
import Colors from '../../config/colors';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.primary};

  a {
    margin-right: 20px;
    color: #ffffff;
    font-weight: bold;
  }
  a:hover {
    color: ${Colors.primaryDark};
  }
`;
