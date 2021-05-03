import React from 'react';
import logo from '~/assets/logo.png';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { signInRequestSaga } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from 'services/history';
import Modal from '~/components/modal/modal.android.component';

const schema = Yup.object().shape({
  usuario: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  async function handleSubmit({ usuario, password }) {
    store.dispatch(signInRequestSaga(usuario, password));
  }

  function signUp() {
    history.push('/signUp');
  }

  function esqueceuSenha() {
    history.push('/esqueceuSenha');
  }

  return (
    <>
      <Modal />
      <img src={logo} style={{ width: 350 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="usuario" type="text" placeholder="Usuário" />
        <Input name="password" type="password" placeholder="Password" />
        <p style={{ cursor: 'pointer' }} className="resetPassword" onClick={esqueceuSenha}>
          Esqueceu a senha?
        </p>
        <Button type="submit">Acessar</Button>
        <br />
        <button type="button" onClick={signUp} className="btn btn-success">
          Criar Nova Conta
        </button>
      </Form>
    </>
  );
}
