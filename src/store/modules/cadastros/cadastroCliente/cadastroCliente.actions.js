import {
  SET_STATE_CLIENTE,
  GET_CLIENTE,
  SET_CLIENTE,
  FILTER_CLIENTE,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  VIEW_CLIENTE,
  CLEAN_FIELDS,
} from './cadastroCliente.actionTypes';

export function setState(action) {
  return {
    type: SET_STATE_CLIENTE,
    payload: action,
  };
}

export function getCliente(action) {
  return {
    type: GET_CLIENTE,
    payload: action,
  };
}

export function setCliente() {
  return {
    type: SET_CLIENTE,
  };
}

export function filterCliente() {
  return {
    type: FILTER_CLIENTE,
  };
}

export function cleanFields() {
  return {
    type: CLEAN_FIELDS,
  };
}

export function deleteCliente(action) {
  return {
    type: DELETE_CLIENTE,
    payload: action,
  };
}

export function updateCliente(action) {
  return {
    type: UPDATE_CLIENTE,
    payload: action,
  };
}

export function viewCliente(action) {
  return {
    type: VIEW_CLIENTE,
    payload: action,
  };
}
