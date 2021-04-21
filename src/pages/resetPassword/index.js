import React from 'react';
import logo from '~/assets/logo.png';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { updatePassword } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from 'services/history';

const schema = Yup.object().shape({
  confirmPassword: Yup.string().required('A confirmação de senha é obrigatória'),
  password: Yup.string().required('A senha é obrigatória'),
  email: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn(props) {
  async function handleSubmit({ confirmPassword, password, email }) {
    const token = props.location.search.replace('?token=', '');
    store.dispatch(updatePassword({ confirmPassword, password, token, email }));
  }

  function home() {
    history.push('/');
  }

  return (
    <>
      <img src={logo} style={{ width: 350 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Input name="confirmPassword" type="password" placeholder="Confirmar Password" />
        <Button type="submit">Trocar senha</Button>
        <Button onClick={home} className="btn btn-success mt-2">
          {'Voltar ao site'}
        </Button>
      </Form>
    </>
  );
}
