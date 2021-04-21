import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import auth from './auth/auth.reducer';
import ranking from './cadastros/ranking/ranking.reducer';
import inscrevaSe from './cadastros/inscrevaSe/inscrevaSe.reducer';
import torneio from './cadastros/torneio/torneio.reducer';
import perfil from './cadastros/perfil/perfil.reducer';
import breadcrumb from './breadcrumb/breadcrumb.reducer';
import loading from './loading/loading.reducer';
import admin from './cadastros/admin/admin.reducer';
function formReducer(fields = [], action = undefined) {
  switch (action.type) {
    case 'updateFields':
      return [...action.fields];
    default:
      return fields;
  }
}

export default combineReducers({
  auth,
  ranking,
  breadcrumb,
  form: reduxFormReducer,
  formReducer,
  inscrevaSe,
  torneio,
  perfil,
  admin,
  loading,
});
