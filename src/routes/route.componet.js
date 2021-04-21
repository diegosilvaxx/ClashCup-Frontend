import Ranking from './routeSystem/ranking.route';
import InscrevaSe from './routeSystem/inscrevaSe.route';
import Torneio from './routeSystem/torneio.route';
import Perfil from './routeSystem/perfil.route';
import Admin from './routeSystem/admin.route';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import ResetPassword from '../pages/resetPassword';
import EsqueceuSenha from '../pages/esqueceuSenha';

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
  {
    path: '/resetPassword',
    component: ResetPassword,
    isPrivate: false,
    exact: true,
    breadcrumb: 'Clash Cup / Resetar Password',
  },
  {
    path: '/esqueceuSenha',
    component: EsqueceuSenha,
    isPrivate: false,
    exact: true,
    breadcrumb: 'Clash Cup / Esqueceu senha',
  },
];

const route = [...dashboard, ...Ranking, ...InscrevaSe, ...Torneio, ...Perfil, ...Admin];

export default route;
