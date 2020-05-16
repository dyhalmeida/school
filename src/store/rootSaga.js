import { all } from 'redux-saga/effects';

/** import dos sagas */
import exampleSaga from './example/sagas';

export default function* rootSaga() {
  return yield all([
    exampleSaga,
    // exampleSaga2,
    // exampleSaga2,
  ]);
}
