import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import * as actions from '../../store/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }

  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/register">
          <FaUserAlt size={24} />
        </Link>
        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/logout">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login">
            <FaSignInAlt size={24} />
          </Link>
        )}
        {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
      </Nav>
    </>
  );
}

export default Header;
