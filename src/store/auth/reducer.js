import * as types from '../types';

// Estado inicial
const initialSate = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

export default function (state = initialSate, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return { ...initialSate };
    }

    default: {
      return state;
    }
  }
}
