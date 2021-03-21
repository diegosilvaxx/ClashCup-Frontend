import * as authActionCreators from '~/store/modules/auth/auth.actions';
import { store } from '~/store';

async function logout() {
  await store.dispatch(authActionCreators.signOutSaga());
}

const actions = data => {
  switch (data.key) {
    case 'perfil':
      break;
    case 'sair':
      logout();
      break;
  }
};
export default actions;
