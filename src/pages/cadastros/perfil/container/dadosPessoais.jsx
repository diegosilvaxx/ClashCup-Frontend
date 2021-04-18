import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import Field from '~/components/field/field.component';
import '../components/perfil.css';
import RedefinirSenha from '../container/redefinirSenha';

class dadosPessoais extends Component {
  render() {
    return (
      <>
        <h1 className="mt-3 mb-3">Dados Pessoais</h1>
        <Row>
          <Col sm={24}>
            <Row justify={'space-between'}>
              <Col sm={11}>
                <Field type="AInput" name={'Nome'} label="Nome">
                  <Input />
                </Field>
              </Col>
              <Col sm={11}>
                <Field type="AInput" name={'Email'} label="Email">
                  <Input disabled={true} />
                </Field>
              </Col>
            </Row>
            <Row justify={'space-between'}>
              <Col sm={11}>
                <Field type="AInput" name={'Celular'} label="Celular">
                  <Input />
                </Field>
              </Col>
              <Col sm={11}>
                <Field disabled={true} type="AInput" name={'IdClash'} label="IdClash">
                  <Input />
                </Field>
              </Col>
            </Row>
            <RedefinirSenha />
          </Col>
        </Row>
      </>
    );
  }
}

export default dadosPessoais;
