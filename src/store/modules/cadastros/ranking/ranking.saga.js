import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_RANKING, SET_RANKING, FILTER_RANKING, UPDATE_RANKING } from './ranking.actionTypes';
import api from '~/services/api';
import { setState } from './ranking.actions';
import { store } from '~/store';

export function* getRanking({ payload }) {
  if (!payload) {
    yield put(
      setState({
        membersList: [],
      })
    );
    return;
  }
  const result = yield call(api.apiSistema.get, `Ranking/RankingById/${payload.replace('#', '')}`);
  const dto = result.data.data;

  if (dto) {
    yield put(
      setState({
        membersList: dto.membersList,
      })
    );
    toast.success('Ranking carregado com sucesso!');
  }
}

export function* setRanking() {
  const payload = store.getState().ranking;
  var result = yield call(api.apiSistema.post, `Ranking`, payload);

  if (result) {
    toast.success('Ranking cadastrado com sucesso!');
  }
}

export function* updateRanking(data) {
  const payload = store.getState().ranking;
  var result = yield call(api.apiSistema.put, `Ranking/${data.payload}`, payload);

  if (result) {
    toast.success('Ranking atualizado com sucesso!');
  }
}

export function* filterRanking(noMessage) {
  const result = yield call(api.apiSistema.get, `Ranking`);

  if (result.data) {
    yield put(
      setState({
        FilterRanking: result.data.data.map(x => {
          return { ...x, key: x.idClash };
        }),
      })
    );
    if (noMessage === true) return;
    toast.success('Ranking carregado com sucesso!');
  }
}

export default all([
  takeLatest(GET_RANKING, getRanking),
  takeLatest(SET_RANKING, setRanking),
  takeLatest(FILTER_RANKING, filterRanking),
  takeLatest(UPDATE_RANKING, updateRanking),
]);
