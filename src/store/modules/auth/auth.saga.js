import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from 'services/history';
import api from '~/services/api';
import { signInSuccess, signFailure, signOut } from './auth.actions';
import { SIGN_IN_REQUEST_SAGA, SIGN_REGISTER, SIGN_OUT_SAGA } from './auth.actionTypes';

export function* signIn({ payload }) {
  const { usuario, password } = payload;

  try {
    const result = yield call(api.apiSistema.post, `Auth/login`, {
      Email: usuario,
      Password: password,
    });

    const payloadLogin = {
      token: result.data.data.accessToken,
      codigo: result.data.data.user.id,
      email: result.data.data.user.email,
      JogadorId: result.data.data.user.jogadorId,
      IdClash: result.data.data.user.idClash,
    };

    yield put(signInSuccess(payloadLogin));
    history.push('/torneio');
  } catch (error) {
    yield put(signFailure());
  }
}

export function* signRegister({ payload }) {
  var data = {
    Email: payload.email,
    Password: payload.password,
    ConfirmPassword: payload.confirmPassword,
    IdClash: payload.idClash,
    Celular: payload.celular,
    Nome: payload.nome,
  };
  var result = yield call(api.apiSistema.post, `Auth/register`, data);

  if (result) {
    toast.success('Cadastrado com sucesso!');
    history.push('/');
  } else {
    yield put(signFailure());
  }
}

export function* signOutSaga() {
  yield put(signOut());
  history.push('/');
}

export default all([
  takeLatest(SIGN_IN_REQUEST_SAGA, signIn),
  takeLatest(SIGN_OUT_SAGA, signOutSaga),
  takeLatest(SIGN_REGISTER, signRegister),
]);
