import Ranking from './routeSystem/ranking.route';
import InscrevaSe from './routeSystem/inscrevaSe.route';
import Torneio from './routeSystem/torneio.route';
import Perfil from './routeSystem/perfil.route';
import Admin from './routeSystem/admin.route';

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

const route = [...dashboard, ...Ranking, ...InscrevaSe, ...Torneio, ...Perfil, ...Admin];

export default route;
