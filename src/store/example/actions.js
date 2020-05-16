import * as types from '../types';

export function request() {
  return {
    type: types.REQUEST,
  };
}
export function success() {
  return {
    type: types.SUCESS,
  };
}
export function failure() {
  return {
    type: types.FAILURE,
  };
}
