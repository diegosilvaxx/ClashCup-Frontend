import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '~/store';
import * as authActionCreators from '~/store/modules/auth/auth.actions';
import * as loadingActionCreators from '~/store/modules/loading/loading.actions';

const apiMaster = {
  apiSistema: axios.create({
    //producao
    baseURL: 'https://api.clashcup.com.br/api/v1/',
    //developer
    // baseURL: 'https://localhost:44324/api/v1/',
  }),
};

apiMaster.apiSistema.interceptors.request.use(
  async function(config) {
    await store.dispatch(loadingActionCreators.setState());
    const { token } = store.getState().auth;
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

apiMaster.apiSistema.interceptors.response.use(
  async function(response) {
    if (response && response.status === 401) {
      await store.dispatch(loadingActionCreators.setState());
      return toast.error('Sessao Expirada!');
    }
    await store.dispatch(loadingActionCreators.setState());
    return response;
  },
  async function(error) {
    if (error.response.status === 401) {
      await store.dispatch(loadingActionCreators.setState());
      await store.dispatch(authActionCreators.signOutSaga());
    }

    if (error.response.status === 500 || error.response.status === 404) {
      await store.dispatch(loadingActionCreators.setState());
      return toast.warn('Houve um erro inesperado no sistema,se o problema continuar, comunique o suporte!');
    }
    if (error && error.response && error.response.data) {
      await store.dispatch(loadingActionCreators.setState());
      error.response.data.errors.forEach(errorResult => {
        toast.error(errorResult);
      });
    }
  }
);

export default apiMaster;
