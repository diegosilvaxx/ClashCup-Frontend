import { SET_STATE_BREADCRUMB } from './breadcrumb.actionTypes';

export function setState(action) {
  return {
    type: SET_STATE_BREADCRUMB,
    payload: action,
  };
}
