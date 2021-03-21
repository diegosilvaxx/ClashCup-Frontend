import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_FAILURE,
  SIGN_OUT,
  SIGN_REGISTER,
  SIGN_OUT_SAGA,
} from './auth.actionTypes';

export function signInRequest(usuario, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { usuario, password },
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: payload,
  };
}

export function signFailure() {
  return {
    type: SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function signOutSaga() {
  return {
    type: SIGN_OUT_SAGA,
  };
}

export function signRegister(payload) {
  return {
    type: SIGN_REGISTER,
    payload: payload,
  };
}
