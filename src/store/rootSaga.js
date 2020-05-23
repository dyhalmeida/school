import { all } from 'redux-saga/effects';

/** import dos sagas */
// import exampleSaga from './example/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    // exampleSaga2,
    // exampleSaga2,
  ]);
}
