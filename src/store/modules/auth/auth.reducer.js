import produce from 'immer';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_FAILURE, SIGN_OUT } from './auth.actionTypes';

const INITIAL_STATE = {
  token: null,
  signed: false,
  failLogin: false,
  loading: false,
  email: undefined,
  codigo: undefined,
  JogadorId: undefined,
  IdClash: undefined,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case SIGN_IN_SUCCESS:
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.email = action.payload.email;
        draft.codigo = action.payload.codigo;
        draft.JogadorId = action.payload.JogadorId;
        draft.IdClash = action.payload.IdClash;
        break;
      case SIGN_FAILURE:
        draft.failLogin = true;
        draft.signed = false;
        draft.loading = false;
        break;
      case SIGN_OUT:
        draft.token = null;
        draft.signed = false;
        draft.loading = false;
        break;
    }
  });
}
