import * as types from '../types';

// Estado inicial
const initialSate = {
  buttonClicked: false,
};

export default function (state = initialSate, action) {
  switch (action.type) {
    case types.BUTTON_CLICKED: {
      const newState = { ...state, buttonClicked: !state.buttonClicked };
      return newState;
    }

    default:
      return state;
  }
}
