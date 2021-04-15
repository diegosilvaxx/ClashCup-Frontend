import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_PAGAMENTO, SET_PAGAMENTO, GET_PASSPORT } from './inscrevaSe.actionTypes';
import api from '~/services/api';
import { setState } from './inscrevaSe.actions';
import { store } from '~/store';

export function* getPagamento({ payload }) {
  const result = yield call(api.apiSistema.get, `Pagamento/${payload}`);
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
}

export function* getPassport({ payload }) {
  const result = yield call(api.apiSistema.get, `Pagamento/Passport/3ce090c0-6a78-435e-9f0a-ae84248f40c3`);
  // const result = yield call(api.apiSistema.get, `Pagamento/Passport/${payload}`);
  const dto = result.data.data;
  if (!dto.success && !dto.length) {
    return;
  }
  if (dto) {
    let novoDto = dto.map(x => Object.assign(x, { key: Date.now() }));
    yield put(
      setState({
        FilterPassport: novoDto,
      })
    );
  }
}

export function* setPagamento({ payload }) {
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
}

export default all([
  takeLatest(GET_PAGAMENTO, getPagamento),
  takeLatest(SET_PAGAMENTO, setPagamento),
  takeLatest(GET_PASSPORT, getPassport),
]);
