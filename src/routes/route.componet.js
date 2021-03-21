import CadastroCliente from './routeSystem/cadastroCliente.route';
import InscrevaSe from './routeSystem/inscrevaSe.route';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const dashboard = [
  {
    path: '/',
    component: SignIn,
    isPrivate: false,
    exact: true,
    breadcrumb: 'Home',
  },
  {
    path: '/signUp',
    component: SignUp,
    isPrivate: false,
    exact: true,
    breadcrumb: 'Clash Cup / Cadastro',
  },
];

const route = [...dashboard, ...CadastroCliente, ...InscrevaSe];

export default route;
