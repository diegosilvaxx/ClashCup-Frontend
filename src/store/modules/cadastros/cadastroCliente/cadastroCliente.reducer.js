import { SET_STATE_CLIENTE, CLEAN_FIELDS } from './cadastroCliente.actionTypes';
import Immutable from 'seamless-immutable';
import moment from 'moment';

const INITIAL_STATE = Immutable({
  Nome: undefined,
  Sobrenome: undefined,
  CPF: undefined,
  CNPJ: undefined,
  InscricaoEstadual: undefined,
  RG: undefined,
  Email: undefined,
  Telefone: undefined,
  Celular: undefined,
  DataNascimento: undefined,
  //Endereco
  Endereco: {
    CEP: undefined,
    Logradouro: undefined,
    Numero: undefined,
    Complemento: undefined,
    Bairro: undefined,
    Cidade: undefined,
    Estado: undefined,
  },
  //Dados Config
  ClienteAtivo: 'Sim',
  TipoCliente: 'PF',
  Observacao: undefined,
  FilterCliente: [],
});

const reduce = (state = INITIAL_STATE, action = {}) => {
  let payload = action.payload || {};
  switch (action.type) {
    case SET_STATE_CLIENTE:
      return state.merge({
        ...payload,
        DataNascimento: payload.DataNascimento ? moment(payload.DataNascimento).toDate() : undefined,
      });
    case CLEAN_FIELDS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reduce;
