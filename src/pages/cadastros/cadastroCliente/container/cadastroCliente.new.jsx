import React, { Component } from 'react';
import autoBind from 'react-autobind';
import CadastroClienteForm from '../components/cadastroCliente.form';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return <CadastroClienteForm prefix="I" />;
  }
}

export default Container;
