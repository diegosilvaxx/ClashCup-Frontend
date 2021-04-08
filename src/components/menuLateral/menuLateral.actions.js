import history from '~/services/history';

const actions = data => {
  switch (data.key) {
    case 'ranking':
      history.push({
        pathname: '/ranking',
      });
      break;
    case 'inscrevaSe':
      history.push({
        pathname: '/inscrevaSe',
      });
      break;
    case 'torneio':
      history.push({
        pathname: '/torneio',
      });
      break;
    case 'perfil':
      history.push({
        pathname: '/perfil',
      });
      break;
  }
};
export default actions;
