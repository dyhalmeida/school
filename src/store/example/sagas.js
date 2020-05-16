/** Meddleware saga */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

/** Simula uma requisição a API */
const getDataExample = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

function* exampleRequest() {
  try {
    yield call(getDataExample, null /** parametro da função getDataExample */);
    yield put(actions.success());
    toast.success('Requisição realizada com sucesso');
  } catch (error) {
    yield put(actions.failure());
  }
}

/**
 * All permite exporta mais de um saga.
 * TakeLatest obtem a última ação interceptada
 */
export default all([
  takeLatest(types.REQUEST, exampleRequest),
  // takeLatest(types.REQUEST, exampleRequest2),
  // takeLatest(types.REQUEST, exampleRequest3),
]);
