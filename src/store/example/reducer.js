import * as types from '../types';

// Estado inicial
const initialSate = {
  buttonClicked: false,
};

export default function (state = initialSate, action) {
  switch (action.type) {
    case types.REQUEST: {
      console.log('Fazendo requisição');
      return state;
    }

    case types.SUCESS: {
      console.log('Requisição realizada com sucesso');
      return { ...state, buttonClicked: !state.buttonClicked };
    }

    case types.FAILURE: {
      console.log('Falha na requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
