import {
  SIGN_IN_REQUEST_REDUCER,
  SIGN_IN_REQUEST_SAGA,
  SIGN_IN_SUCCESS,
  SIGN_FAILURE,
  SIGN_OUT,
  SIGN_REGISTER,
  SIGN_OUT_SAGA,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
} from './auth.actionTypes';

export function signInRequestReducer() {
  return {
    type: SIGN_IN_REQUEST_REDUCER,
  };
}

export function signInRequestSaga(usuario, password) {
  return {
    type: SIGN_IN_REQUEST_SAGA,
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

export function resetPassword(payload) {
  return {
    type: RESET_PASSWORD,
    payload: payload,
  };
}

export function updatePassword(payload) {
  return {
    type: UPDATE_PASSWORD,
    payload: payload,
  };
}
