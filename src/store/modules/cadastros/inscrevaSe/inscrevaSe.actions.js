import { GET_PAGAMENTO, SET_PAGAMENTO, SET_STATE_PAGAMENTO, GET_PASSPORT } from './inscrevaSe.actionTypes';

export function getPagamento(action) {
  return {
    type: GET_PAGAMENTO,
    payload: action,
  };
}

export function getPassport(action) {
  return {
    type: GET_PASSPORT,
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
    type: SET_STATE_PAGAMENTO,
    payload: action,
  };
}
