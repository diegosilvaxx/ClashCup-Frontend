import { SET_STATE_ADMIN, UPDATE_TORNEIO, POST_TORNEIO, CLEAN_FIELDS, DELETE_TORNEIO } from './admin.actionTypes';

export function setState(action) {
  return {
    type: SET_STATE_ADMIN,
    payload: action,
  };
}

export function updateRanking(action) {
  return {
    type: UPDATE_TORNEIO,
    payload: action,
  };
}

export function postTorneio(action) {
  return {
    type: POST_TORNEIO,
    payload: action,
  };
}

export function deleteTorneio() {
  return {
    type: DELETE_TORNEIO,
  };
}

export function cleanFields() {
  return {
    type: CLEAN_FIELDS,
  };
}
