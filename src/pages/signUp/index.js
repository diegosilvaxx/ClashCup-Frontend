import React, { Component } from 'react';
import logo from '~/assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { signRegister } from '~/store/modules/auth/auth.actions';
import {store} from '~/store';
import { Row, Col } from 'antd';

const schema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('A senha é obrigatória'),
  nome: Yup.string().required('O nome é obrigatório'),
  celular: Yup.string().required('O celular é obrigatório'),
  idClash: Yup.string().required('O idClash é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
});

class SignUp extends Component {
  handleSubmit(data) {
    store.dispatch(signRegister(data));
  }
  render() {
  return (
    <>
      <Row>
        <Col className="col-sm-12" style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo} style={{ width: 380, height: 150 }} alt="PortalVendas" />
        </Col>
      </Row>

      <Form schema={schema} onSubmit={this.handleSubmit}>
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
            <Col className="col-sm-6">
              <Input name="celular" placeholder="Celular" />
            </Col>
            <Col className="col-sm-6">
              <Input name="idClash" placeholder="IdClash" />
            </Col>
        </Row>

        <Row className="pb-2">
            <Col className="col-sm-6">
              <Input name="password" type="password" placeholder="Senha" />
            </Col>
            <Col className="col-sm-6">
              <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirma Password"
            />
            </Col>
        </Row>

        <Row className="pb-2">
          <Col className="col-sm-12">
            <Button className="btn-success w-100" type="submit">Criar conta</Button>
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
}

export default SignUp;
