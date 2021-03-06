import React from 'react';
import logo from '~/assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { signRegister } from '~/store/modules/auth/auth.actions';
import { store } from '~/store';
import { Row, Col } from 'antd';
import Modal from '~/components/modal/modal.info.component';

const schema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('A senha é obrigatória'),
  nome: Yup.string().required('O nome é obrigatório'),
  celular: Yup.string().required('O celular é obrigatório'),
  idClash: Yup.string().required('O idClash é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
});

export default function SignUp() {
  function handleSubmit(data) {
    store.dispatch(signRegister(data));
  }

  return (
    <>
      <Row>
        <Col className="col-sm-12" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} style={{ width: 380, height: 150 }} alt="PortalVendas" />
        </Col>
      </Row>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Row>
          <Col className="col-sm-12">
            <Input className="w-100" name="nome" placeholder="Nome" />
          </Col>
        </Row>
        <Row>
          <Col className="col-sm-12">
            <Input className="w-100" name="email" placeholder="Email" />
          </Col>
        </Row>

        <Row className="pb-2">
          <Col className="col-sm-6 displayGrid">
            <Input name="celular" placeholder="Celular" />
          </Col>
          <Col className="col-sm-6 displayGrid d-flex">
            <Input name="idClash" placeholder="IdClash" style={{ width: '100%' }} />
            <Modal />
          </Col>
        </Row>

        <Row className="pb-2">
          <Col className="col-sm-6 displayGrid">
            <Input name="password" type="password" placeholder="Senha" />
          </Col>
          <Col className="col-sm-6 displayGrid">
            <Input name="confirmPassword" type="password" placeholder="Confirma Password" />
          </Col>
        </Row>

        <Row className="pb-2">
          <Col className="col-sm-12">
            <Button className="btn-success w-100" type="submit">
              Criar conta
            </Button>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col className="col-sm-12">
            <Link className="btn btn-primary w-100" to="/">
              Já tenho login
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  );
}
