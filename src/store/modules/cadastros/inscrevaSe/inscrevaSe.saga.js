import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  GET_PAGAMENTO,
  SET_PAGAMENTO,
} from './inscrevaSe.actionTypes';
import api from '~/services/api';
import { setState } from './inscrevaSe.actions';
import { store } from '~/store';

export function* getPagamento({ payload }) {
  const result = yield call(api.apiSistema.get, `Pagamento/${payload}`);
  const dto = result.data.data;

  if (result) {
    yield put(
      setState({
        IdTorneio: dto.idTorneio,
        Email: dto.email,
        Status: dto.status,
        FormaPagamento: dto.formaPagamento,
      })
    );
    toast.success('Pagamento carregado com sucesso!');
  }
}

export function* setPagamento({ payload}) {
  const user = store.getState().auth;
  debugger
  const data = {
    FormaPagamento: payload.FormaPagamento,
    Status: "Concluido",
    Email :user.email,
    IdTorneio: 1,
    JogadorId: user.JogadorId,
    IdClash: user.IdClash
  }
  debugger
  var result = yield call(api.apiSistema.post, `Pagamento`, data);
  debugger
  if (result) {
    toast.success('Pagamento realizado com sucesso!');
  }
}

export default all([
  takeLatest(GET_PAGAMENTO, getPagamento),
  takeLatest(SET_PAGAMENTO, setPagamento),
]);
