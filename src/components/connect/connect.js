import React from 'react';
import { connect } from 'react-redux';
import * as actionAuthCreators from '~/store/modules/auth/auth.actions';
import * as actionClienteCreators from '~/store/modules/cadastros/cadastroCliente/cadastroCliente.actions';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...actionAuthCreators,
      ...actionClienteCreators,
    },
    dispatch
  );
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

// const App = App => {
//   return App;
// };

export default connect(mapStateToProps, mapDispatchToProps);

//  App;
