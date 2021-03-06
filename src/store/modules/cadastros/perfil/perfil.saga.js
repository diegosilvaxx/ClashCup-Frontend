import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_PERFIL, SET_PERFIL } from './perfil.actionTypes';
import api from '~/services/api';
import { setState } from './perfil.actions';
import { store } from '~/store';

export function* getPerfil({ payload }) {
  try {
    const user = store.getState().auth;
    const result = yield call(api.apiSistema.get, `Jogador/${user.JogadorId}`);
    const dto = result.data.data;
    if (dto.success || dto.id) {
      yield put(
        setState({
          Nome: dto.nome,
          Email: dto.email,
          Celular: dto.celular,
          IdClash: dto.idClash,
        })
      );
    }
    const resultPerfil = yield call(api.apiSistema.get, `Ranking/Perfil/${user.IdClash.replace('#', '')}`);
    const dtoPerfil = resultPerfil.data.data;
    if (dtoPerfil.name) {
      yield put(
        setState({
          NomeClash: dtoPerfil.name,
          Trofeu: dtoPerfil.trophies,
          Vitoria: dtoPerfil.wins,
          CartaFavorita: dtoPerfil.currentFavouriteCard.name,
          VitoriaTres: dtoPerfil.threeCrownWins,
          Derrota: dtoPerfil.losses,
          MaxTrofeu: dtoPerfil.bestTrophies,
          Doacao: dtoPerfil.totalDonations,
          MelhorPosicao: 0,
          NumeroParticipações: 0,
        })
      );
      toast.success('Perfil carregado com sucesso!');
    }
  } catch (error) {}
}

export function* setPerfil({ payload }) {
  try {
    const user = store.getState().auth;
    if (payload.SenhaAntiga) {
      if (!payload.ConfirmaSenha || !payload.NovaSenha) {
        toast.error('Para alterar sua senha, preencha os 3 campos senha antiga , nova senha e confirme a senha');
      }
    }
    if (payload.ConfirmaSenha !== payload.NovaSenha) {
      toast.error('Confirmação de senha, divergente a nova senha!');
      return;
    }
    const data = {
      Nome: payload.Nome,
      Email: payload.Email,
      Celular: payload.Celular,
      IdClash: payload.IdClash,
      SenhaAntiga: payload.SenhaAntiga,
      NovaSenha: payload.NovaSenha,
      UserId: user.codigo,
    };
    var result = yield call(api.apiSistema.put, `Jogador/${user.JogadorId}`, data);
    if (result) {
      toast.success('Perfil alterado com sucesso!');
    }
  } catch (error) {}
}

export default all([takeLatest(GET_PERFIL, getPerfil), takeLatest(SET_PERFIL, setPerfil)]);
