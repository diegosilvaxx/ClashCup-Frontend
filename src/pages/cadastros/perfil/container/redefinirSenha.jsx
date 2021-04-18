import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import Field from '~/components/field/field.component';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PassportGrid from '../container/passport.grid';
import '../components/perfil.css';

class redefinirSenha extends Component {
  render() {
    return (
      <>
        <Row>
          <h3>Redefinição de Senha </h3>
        </Row>
        <Row justify={'space-between'}>
          <Col sm={8}>
            <Field disabled={true} type="AInput" name={'SenhaAntiga'} label="Senha Antiga">
              <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Field>
          </Col>
          <Col sm={6}>
            <Field disabled={true} type="AInput" name={'NovaSenha'} label="Nova Senha">
              <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Field>
          </Col>
          <Col sm={6}>
            <Field disabled={true} type="AInput" name={'ConfirmaSenha'} label="Confirme a senha">
              <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col sm={24}>
            <PassportGrid key="passportGridPerfil" />
          </Col>
        </Row>
        <Row>
          <button type="submit" className="btn btn-success mt-3">
            Salvar
          </button>
        </Row>
      </>
    );
  }
}

export default redefinirSenha;
