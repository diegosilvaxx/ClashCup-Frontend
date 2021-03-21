import {
  GET_PAGAMENTO,
  SET_PAGAMENTO,
  SET_STATE
} from './inscrevaSe.actionTypes';

export function getPagamento(action) {
  return {
    type: GET_PAGAMENTO,
    payload: action,
  };
}

export function setPagamento(action) {
  return {
    type: SET_PAGAMENTO,
    payload: action,
  };
}

export function setState(action) {
  return {
    type: SET_STATE,
    payload: action,
  };
}

