import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

function Header() {
  const buttonClicked = useSelector((state) => state.buttonClicked);
  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/user">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
        {buttonClicked ? 'Botão clicado' : 'Botão não clicado'}
      </Nav>
    </>
  );
}

export default Header;
