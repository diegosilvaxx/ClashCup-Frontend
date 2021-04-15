import { SET_STATE_ADMIN, CLEAN_FIELDS } from './admin.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  IdTorneio: undefined,
  ValorTorneio: undefined,
  Senha: undefined,
  HorarioInicio: undefined,
  HorarioAbertura: undefined,
  NomeTorneio: undefined,
  DataTorneio: undefined,
  Descricao: undefined,
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_ADMIN:
      return state.merge(payload);
    case CLEAN_FIELDS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reduce;
