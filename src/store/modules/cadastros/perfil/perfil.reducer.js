import { SET_STATE_PERFIL } from './perfil.actionTypes';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  Nome: undefined,
  Email: undefined,
  Celular: undefined,
  IdClash: undefined,
  NomeClash: undefined,
  Trofeu: undefined,
  Vitoria: undefined,
  CartaFavorita: undefined,
  VitoriaTres: undefined,
  Derrota: undefined,
  MaxTrofeu: undefined,
  Doacao: undefined,
  MelhorPosicao: undefined,
  NumeroParticipações: undefined,
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_PERFIL:
      return state.merge(payload);
    default:
      return state;
  }
};

export default reduce;
