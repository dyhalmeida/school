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
// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, name, email, password = undefined } = payload;
  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        name,
        password,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        name,
        password,
      });
      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      history.push('/login');
    }
  } catch (error) {
    const errors = get(error, 'response.data.error', []);
    const status = get(error, 'response.status', 0);

    if (status === 401) {
      toast.warn('Você precisa fazer login novamente');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((e) => toast.error(e));
    } else {
      toast.error('Erro desconhecido');
    }
    yield put(actions.registerFailure());
  }
}

/**
 * All permite exporta mais de um saga.
 * TakeLatest obtem a última ação interceptada
 */
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistReHyDrate),
  // takeLatest(types.REQUEST, exampleRequest2),
  // takeLatest(types.REQUEST, exampleRequest3),
]);
