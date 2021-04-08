import { SET_STATE_PAGAMENTO } from './inscrevaSe.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  TorneioId: undefined,
  Email: undefined,
  Status: undefined,
  FormaPagamento: undefined,
  IdClash: undefined,
  FilterPassport: [],
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_PAGAMENTO:
      return state.merge(payload);
    default:
      return state;
  }
};

export default reduce;
