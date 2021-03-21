import produce from 'immer';
import { SET_STATE_BREADCRUMB } from './breadcrumb.actionTypes';

const INITIAL_STATE = {
  breadcrumb: undefined,
};

export default function setState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STATE_BREADCRUMB:
      let { payload } = action;
      return produce(state, draft => {
        draft.breadcrumb = payload;
      });
    default:
      return state;
  }
}
