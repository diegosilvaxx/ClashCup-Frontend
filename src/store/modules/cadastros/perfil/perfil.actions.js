import { GET_PERFIL, SET_PERFIL, SET_STATE_PERFIL } from './perfil.actionTypes';

export function getPerfil(action) {
  return {
    type: GET_PERFIL,
    payload: action,
  };
}

export function setPerfil(action) {
  return {
    type: SET_PERFIL,
    payload: action,
  };
}

export function setState(action) {
  return {
    type: SET_STATE_PERFIL,
    payload: action,
  };
}
