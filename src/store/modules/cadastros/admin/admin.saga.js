import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { POST_TORNEIO, UPDATE_TORNEIO, DELETE_TORNEIO } from './admin.actionTypes';
import api from '~/services/api';
import { store } from '~/store';

export function* setTorneio() {
  const payload = store.getState().admin;
  debugger;
  var result = yield call(api.apiSistema.post, `Torneio`, payload);

  if (result.data.success) {
    toast.success('Torneio cadastrado com sucesso!');
  }
}

export function* updateTorneio() {
  const payload = store.getState().admin;
  debugger;
  var result = yield call(api.apiSistema.put, `Torneio/`, payload);

  if (result) {
    toast.success('Torneio atualizado com sucesso!');
  }
}

export function* deleteTorneio() {
  var result = yield call(api.apiSistema.delete, `Torneio/`);

  if (result) {
    toast.success('Torneio excluido com sucesso!');
  }
}

export default all([
  takeLatest(POST_TORNEIO, setTorneio),
  takeLatest(UPDATE_TORNEIO, updateTorneio),
  takeLatest(DELETE_TORNEIO, deleteTorneio),
]);
