import React from 'react';
import { useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { signInRequestReducer, signInRequestSaga } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from 'services/history';

const schema = Yup.object().shape({
  usuario: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ usuario, password }) {
    store.dispatch(signInRequestSaga(usuario, password));
  }

  async function handleLoading() {
    await store.dispatch(signInRequestReducer());
  }

  function signUp() {
    history.push('/signUp');
  }

  function esqueceuSenha() {
    history.push('/esqueceuSenha');
  }

  return (
    <>
      <img src={logo} style={{ width: 350 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="usuario" type="text" placeholder="Usuário" />
        <Input name="password" type="password" placeholder="Password" />
        <p style={{ cursor: 'pointer' }} className="resetPassword" onClick={esqueceuSenha}>
          Esqueceu a senha?
        </p>
        <Button onClick={handleLoading} type="submit">
          {loading ? 'Carregando...' : 'Acessar'}
        </Button>
        <br />
        <button type="button" onClick={signUp} className="btn btn-success">
          Criar Nova Conta
        </button>
      </Form>
    </>
  );
}
