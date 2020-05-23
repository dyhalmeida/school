/** Meddleware saga */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../services/axios';
import history from '../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Autenticação feita com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválido');
    yield put(actions.loginFailure());
  }
}

function persistReHyDrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

/**
 * All permite exporta mais de um saga.
 * TakeLatest obtem a última ação interceptada
 */
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistReHyDrate),
  // takeLatest(types.REQUEST, exampleRequest2),
  // takeLatest(types.REQUEST, exampleRequest3),
]);
