import { all } from 'redux-saga/effects';
import auth from './auth/auth.saga';
import cadastroCliente from './cadastros/cadastroCliente/cadastroCliente.saga';
import inscrevaSe from './cadastros/inscrevaSe/inscrevaSe.saga';

function* rootSaga() {
  return yield all([auth, cadastroCliente, inscrevaSe]);
}

export default rootSaga;
