import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '~/store';
import * as authActionCreators from '~/store/modules/auth/auth.actions';

const apiMaster = {
  apiSistema: axios.create({
    baseURL: 'https://localhost:44324/api/v1/',
  }),

  apiCEP: axios.create({
    baseURL: 'https://viacep.com.br/ws/',
  }),
};

apiMaster.apiSistema.interceptors.request.use(
  function(config) {
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
  function(response) {
    if (response && response.status == 401) {
      return toast.error('Sessao Expirada!');
    }
    return response;
  },
  async function(error) {
    if (error.response.status == 401) {
      await store.dispatch(authActionCreators.signOutSaga());
    }
    if (error && error.response && error.response.data) {
      error.response.data.errors.forEach(errorResult => {
        toast.error(errorResult);
      });
    }
  }
);

export default apiMaster;
