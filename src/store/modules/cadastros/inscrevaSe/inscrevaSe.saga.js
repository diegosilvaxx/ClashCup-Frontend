import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_PAGAMENTO, SET_PAGAMENTO, GET_PASSPORT } from './inscrevaSe.actionTypes';
import api from '~/services/api';
import { setState } from './inscrevaSe.actions';
import { store } from '~/store';

export function* getPagamento({ payload }) {
  try {
    const user = store.getState().auth;
    const result = yield call(api.apiSistema.get, `Pagamento/${payload}/${user.JogadorId}`);
    const dto = result.data.data;
    if (dto.statusCode === 200) {
      return;
    }
    if (dto[0].id) {
      yield put(
        setState({
          TorneioId: dto[0].torneioId,
          Email: dto[0].email,
          Status: dto[0].status,
          FormaPagamento: dto[0].formaPagamento,
        })
      );
    }
  } catch (error) {}
}

export function* getPassport() {
  try {
    const user = store.getState().auth;
    const result = yield call(api.apiSistema.get, `Pagamento/Passport/${user.JogadorId}`);

    if (result) {
      let novoDto = result.data.data.map(x => Object.assign(x, { key: x.nome + x.data }));
      yield put(
        setState({
          FilterPassport: novoDto,
        })
      );
    }
  } catch (error) {}
}

export function* setPagamento({ payload }) {
  try {
    const user = store.getState().auth;
    const data = {
      FormaPagamento: payload.FormaPagamento,
      Status: 'Concluido',
      Email: user.email,
      TorneioId: payload.TorneioId,
      JogadorId: user.JogadorId,
      IdClash: user.IdClash,
    };
    var result = yield call(api.apiSistema.post, `Pagamento`, data);
    if (result.data.success) {
      toast.success('Pagamento realizado com sucesso!');
    }
  } catch (error) {}
}

export default all([
  takeLatest(GET_PAGAMENTO, getPagamento),
  takeLatest(SET_PAGAMENTO, setPagamento),
  takeLatest(GET_PASSPORT, getPassport),
]);
