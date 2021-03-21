import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import auth from './auth/auth.reducer';
import cadastroCliente from './cadastros/cadastroCliente/cadastroCliente.reducer';
import inscrevaSe from './cadastros/inscrevaSe/inscrevaSe.reducer';
import breadcrumb from './breadcrumb/breadcrumb.reducer';
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
  cadastroCliente,
  breadcrumb,
  form: reduxFormReducer,
  formReducer,
  inscrevaSe,
});
