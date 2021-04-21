import './config/ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './styles/global';
import Loading from 'components/pageLoader/pageLoader';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <Loading />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
