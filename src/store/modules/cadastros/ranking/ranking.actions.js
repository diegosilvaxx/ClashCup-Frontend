import {
  SET_STATE_RANKING,
  GET_RANKING,
  SET_RANKING,
  FILTER_RANKING,
  CLEAN_FIELDS,
  UPDATE_RANKING,
} from './ranking.actionTypes';

export function setState(action) {
  return {
    type: SET_STATE_RANKING,
    payload: action,
  };
}

export function getRanking(action) {
  return {
    type: GET_RANKING,
    payload: action,
  };
}

export function updateRanking(action) {
  return {
    type: UPDATE_RANKING,
    payload: action,
  };
}

export function setRanking() {
  return {
    type: SET_RANKING,
  };
}

export function filterRanking() {
  return {
    type: FILTER_RANKING,
  };
}

export function cleanFields() {
  return {
    type: CLEAN_FIELDS,
  };
}
