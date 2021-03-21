import history from '~/services/history';

const actions = data => {
  switch (data.key) {
    case 'cadastroCliente':
      history.push({
        pathname: '/cadastroCliente/grid',
      });
      break;
    case 'inscrevaSe':
      history.push({
        pathname: '/inscrevaSe',
      });
      break;
  }
};
export default actions;
