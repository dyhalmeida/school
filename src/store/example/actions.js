import * as types from '../types';

export function buttonClicked() {
  return {
    type: types.BUTTON_CLICKED,
    payload: { name: 'Diego Almeida', email: 'dyhalmeida@gmail.com' },
  };
}
