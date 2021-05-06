import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_TORNEIO, SET_TORNEIO } from './torneio.actionTypes';
import api from '~/services/api';
import { setState } from './torneio.actions';
import { store } from '~/store';

export function* getTorneio() {
  try {
    let result = yield call(api.apiSistema.get, `Torneio`);

    const dto = result.data.data;
    if (result) {
      yield put(setState(dto));
      toast.success('Torneio carregado com sucesso!');
    }
  } catch (error) {}
}

export function* setTorneio({ payload }) {
  try {
    const user = store.getState().auth;
    const data = {
      FormaPagamento: payload.FormaPagamento,
      Status: 'Concluido',
      Email: user.email,
      IdTorneio: 1,
      JogadorId: user.JogadorId,
      IdClash: user.IdClash,
    };
    var result = yield call(api.apiSistema.post, `Pagamento`, data);
    if (result) {
      toast.success('Pagamento realizado com sucesso!');
    }
  } catch (error) {}
}

export default all([takeLatest(GET_TORNEIO, getTorneio), takeLatest(SET_TORNEIO, setTorneio)]);
