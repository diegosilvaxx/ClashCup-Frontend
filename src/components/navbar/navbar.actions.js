import * as authActionCreators from '~/store/modules/auth/auth.actions';
import { store } from '~/store';

async function logout() {
  await store.dispatch(authActionCreators.signOutSaga());
}

const Actions = data => {
  switch (data.key) {
    case 'perfil':
      break;
    case 'sair':
      logout();
      break;
    default:
      break;
  }
};
export default Actions;
