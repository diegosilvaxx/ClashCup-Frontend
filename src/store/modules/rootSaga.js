import { all } from 'redux-saga/effects';
import auth from './auth/auth.saga';
import ranking from './cadastros/ranking/ranking.saga';
import inscrevaSe from './cadastros/inscrevaSe/inscrevaSe.saga';
import torneio from './cadastros/torneio/torneio.saga';
import perfil from './cadastros/perfil/perfil.saga';
import admin from './cadastros/admin/admin.saga';

function* rootSaga() {
  return yield all([auth, ranking, inscrevaSe, torneio, perfil, admin]);
}

export default rootSaga;
