import { createStore } from 'redux';

// Estado inicial
const initialSate = {
  buttonClicked: false,
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state, buttonClicked: !state.buttonClicked };
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
