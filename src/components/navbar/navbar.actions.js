import * as authActionCreators from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from '~/services/history';

async function logout() {
  await store.dispatch(authActionCreators.signOutSaga());
}

const Actions = data => {
  switch (data.key) {
    case 'perfil':
      history.push({
        pathname: '/perfil',
      });
      break;
    case 'sair':
      logout();
      break;
    default:
      break;
  }
};
export default Actions;
