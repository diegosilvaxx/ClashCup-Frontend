import { SET_STATE_LOADING } from './loading.actionTypes';

export function setState() {
  return {
    type: SET_STATE_LOADING,
  };
}
