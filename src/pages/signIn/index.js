import React, { Component } from 'react';
import logo from '~/assets/logo.png';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { signInRequest } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from 'services/history';

const schema = Yup.object().shape({
  usuario: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

class SignIn extends Component {
  handleSubmit({ usuario, password }) {
    store.dispatch(signInRequest(usuario, password));
  }

  signUp(){
    history.push('/signUp');
  }

  render() {
    const loading = store.getState().auth.loading;
    return (
      <>
        <img src={logo} style={{ width: 350 }} alt="PortalVendas" />
        <Form schema={schema} onSubmit={this.handleSubmit}>
          <Input name="usuario" type="text" placeholder="Usuário" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">{loading ? 'Carregando...' : 'Acessar'}</Button>
          <br/>
          <button type="button" onClick={this.signUp} class="btn btn-success">Criar Nova Conta</button>
        </Form>
      </>
    );
  }
}

export default SignIn;
