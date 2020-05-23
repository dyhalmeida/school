import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Instalar prop-types para validasr as propriedades do componente
 * yarn add prop-types
 */
import PropTypes from 'prop-types';

function CustomRoute({ component: Component, restricted, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  /** Verifica se a rota é restrita e se o usuário não está logado */
  if (restricted && !isLoggedIn) {
    const params = {
      pathname: '/login',
      state: {
        prevPath: rest.location.pathname,
      },
    };
    return <Redirect to={params} />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

/**
 * Verificação de tipo de tempo de execução para adereços React.
 * Documentação dos tipos das propriedades transmitidas ao componente
 */
CustomRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  restricted: PropTypes.bool,
};

CustomRoute.defaultProps = {
  restricted: false,
};

export default CustomRoute;
