import { SET_STATE_RANKING, CLEAN_FIELDS } from './ranking.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  Nome: undefined,
  Player: undefined,
  Cla: undefined,
  Arena: undefined,
  vitoria: undefined,
  FilterRanking: [],
  membersList: [],
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_RANKING:
      return state.merge(payload);
    case CLEAN_FIELDS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reduce;
