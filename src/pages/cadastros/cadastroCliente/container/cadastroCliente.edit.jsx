import React, { Component } from 'react';
import autoBind from 'react-autobind';
import CadastroClienteForm from '../components/cadastroCliente.form';
import history from '~/services/history';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { state } = history.location;
    return <CadastroClienteForm data={state.id} prefix="E" />;
  }
}

export default Container;
