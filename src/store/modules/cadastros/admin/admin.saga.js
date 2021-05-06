import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { POST_TORNEIO, UPDATE_TORNEIO, DELETE_TORNEIO } from './admin.actionTypes';
import api from '~/services/api';
import { store } from '~/store';

export function* setTorneio() {
  try {
    const payload = store.getState().admin;
    var result = yield call(api.apiSistema.post, `Torneio`, payload);

    if (result.data.success) {
      toast.success('Torneio cadastrado com sucesso!');
    }
  } catch (error) {}
}

export function* updateTorneio({ payload }) {
  try {
    var result = yield call(api.apiSistema.put, `Ranking/UpdateRanking/${payload.replace('#', '')}`);

    if (result) {
      toast.success('Ranking atualizado com sucesso!');
    }
  } catch (error) {}
}

export function* deleteTorneio() {
  try {
    var result = yield call(api.apiSistema.delete, `Torneio/`);

    if (result) {
      toast.success('Torneio excluido com sucesso!');
    }
  } catch (error) {}
}

export default all([
  takeLatest(POST_TORNEIO, setTorneio),
  takeLatest(UPDATE_TORNEIO, updateTorneio),
  takeLatest(DELETE_TORNEIO, deleteTorneio),
]);
