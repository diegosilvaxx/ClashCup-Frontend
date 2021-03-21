import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  GET_CLIENTE,
  SET_CLIENTE,
  FILTER_CLIENTE,
  DELETE_CLIENTE,
  UPDATE_CLIENTE,
} from './cadastroCliente.actionTypes';
import api from '~/services/api';
import { setState } from './cadastroCliente.actions';
import { store } from '~/store';

export function* getCliente({ payload }) {
  const result = yield call(api.apiSistema.get, `Cliente/${payload}`);
  const dto = result.data.data;

  if (result) {
    yield put(
      setState({
        Nome: dto.nome,
        Sobrenome: dto.sobrenome,
        CPF: dto.cpf,
        CNPJ: dto.cnpj,
        InscricaoEstadual: dto.inscricaoEstadual,
        RG: dto.rg,
        Email: dto.email,
        Telefone: dto.telefone,
        Celular: dto.celular,
        DataNascimento: dto.dataNascimento,
        //Endereco
        Endereco: {
          CEP: dto.endereco ? dto.endereco.cep : undefined,
          Logradouro: dto.endereco ? dto.endereco.logradouro : undefined,
          Numero: dto.endereco ? dto.endereco.numero : undefined,
          Complemento: dto.endereco ? dto.endereco.complemento : undefined,
          Bairro: dto.endereco ? dto.endereco.bairro : undefined,
          Cidade: dto.endereco ? dto.endereco.cidade : undefined,
          Estado: dto.endereco ? dto.endereco.estado : undefined,
        },
        //Dados Config
        ClienteAtivo: dto.clienteAtivo,
        TipoCliente: dto.tipoCliente,
        Observacao: dto.observacao,
      })
    );
    toast.success('Cliente carregado com sucesso!');
  }
}

export function* setCliente() {
  const payload = store.getState().cadastroCliente;
  var result = yield call(api.apiSistema.post, `Cliente`, payload);

  if (result) {
    toast.success('Cliente cadastrado com sucesso!');
  }
}

export function* updateCliente(data) {
  const payload = store.getState().cadastroCliente;
  var result = yield call(api.apiSistema.put, `Cliente/${data.payload}`, payload);

  if (result) {
    toast.success('Cliente atualizado com sucesso!');
  }
}

export function* filterCliente(noMessage) {
  const result = yield call(api.apiSistema.get, `Cliente`);

  if (result) {
    yield put(setState({ FilterCliente: result.data.data }));
    if (noMessage == true) return;
    toast.success('Cliente carregado com sucesso!');
  }
}

export function* deleteCliente({ payload }) {
  const { codigo } = payload;
  const result = yield call(api.apiSistema.delete, `Cliente/${codigo}`);

  if (result) {
    yield put(setState(result.data));
    toast.warn('Cliente excluido com sucesso!');
  }
  yield call(filterCliente, true);
}

export default all([
  takeLatest(GET_CLIENTE, getCliente),
  takeLatest(SET_CLIENTE, setCliente),
  takeLatest(FILTER_CLIENTE, filterCliente),
  takeLatest(DELETE_CLIENTE, deleteCliente),
  takeLatest(UPDATE_CLIENTE, updateCliente),
]);
