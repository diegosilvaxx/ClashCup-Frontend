import { GET_TORNEIO, SET_TORNEIO, SET_STATE_TORNEIO } from './torneio.actionTypes';

export function getTorneio() {
  return {
    type: GET_TORNEIO,
  };
}

export function setTorneio(action) {
  return {
    type: SET_TORNEIO,
    payload: action,
  };
}

export function setState(action) {
  return {
    type: SET_STATE_TORNEIO,
    payload: action,
  };
}
