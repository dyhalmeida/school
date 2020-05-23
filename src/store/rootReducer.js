import { combineReducers } from 'redux';

/** Imports dos reducers */
// import exampleReducer from './example/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
