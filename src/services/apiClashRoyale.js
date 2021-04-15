import axios from 'axios';
import ClashRoyale from '~/config/clashRoyale';

const apiMaster = {
  apiClash: axios.create({
    baseURL: 'https://api.clashroyale.com/v1/',
  }),
};

apiMaster.apiClash.interceptors.request.use(
  function(config) {
    if (ClashRoyale.token) {
      config.headers.Authorization = `Bearer ${ClashRoyale.token}`;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default apiMaster;
