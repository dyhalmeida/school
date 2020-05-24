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

    case types.REGISTER_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const { name, email } = action.payload;
      return { ...state, isLoading: false, user: { name, email } };
    }

    case types.REGISTER_CREATED_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case types.REGISTER_FAILURE: {
      return { ...state, isLoading: false };
    }

    default: {
      return state;
    }
  }
}
