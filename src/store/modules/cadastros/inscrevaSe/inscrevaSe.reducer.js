import { SET_STATE } from './inscrevaSe.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  IdTorneio: undefined,
  Email: undefined,
  Status: undefined,
  FormaPagamento: undefined,
  IdClash: undefined,
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE:
      return state.merge(payload);
    default:
      return state;
  }
};

export default reduce;
