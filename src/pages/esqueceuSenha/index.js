import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { resetPassword } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import history from 'services/history';

const schema = Yup.object().shape({
  email: Yup.string().required('Email obrigatório'),
});

export default function EsqueceuSenha() {
  async function handleSubmit({ email }) {
    await store.dispatch(resetPassword(email));
    var emailDom = document.getElementById('email');
    if (emailDom) emailDom.value = '';
  }

  function home() {
    history.push('/');
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h4>Os dados para redefinir a senha serão enviados para o seu email</h4>
        <p>Verificar a caixa de span</p>
        <Input name="email" type="email" placeholder="Email" />
        <Button type="submit">Enviar</Button>
        <Button onClick={home} className="btn btn-success mt-2">
          {'Voltar ao site'}
        </Button>
      </Form>
    </>
  );
}
