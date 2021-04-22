import produce from 'immer';
import { SET_STATE_LOADING } from './loading.actionTypes';

const INITIAL_STATE = {
  loading: false,
};

export default function setState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STATE_LOADING:
      return produce(state, draft => {
        draft.loading = !draft.loading;
      });
    default:
      return state;
  }
}
