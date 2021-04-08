import { SET_STATE_TORNEIO } from './torneio.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  torneio: [],
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_TORNEIO:
      return state.merge({ torneio: payload });
    default:
      return state;
  }
};

export default reduce;
