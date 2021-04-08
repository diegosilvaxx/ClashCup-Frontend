import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Input, Row, Col, Button } from 'antd';
import InputDate from '~/components/inputs/input.date';
import Field from '~/components/field/field.component';
import { store } from '~/store';
import * as adminActionCreators from '~/store/modules/cadastros/admin/admin.actions';
import PopConfirm from '~/components/popConfirm/popConfirm.component';
import Msg from '~/helpers/msgGlobal';

class dadosEndereco extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onFinish() {
    await store.dispatch(adminActionCreators.postTorneio());
  }

  async onDelete() {
    await store.dispatch(adminActionCreators.deleteTorneio());
  }

  render() {
    return (
      <Row>
        <Col sm={24}>
          <Row justify={'space-between'}>
            <Col sm={10}>
              <Field type="AInput" name={'ValorTorneio'} label={'Valor Torneio'}>
                <Input />
              </Field>
            </Col>
            <Col sm={5}>
              <Field type="AInput" name={'Senha'} label={'Senha'}>
                <Input />
              </Field>
            </Col>
            <Col sm={5}>
              <Field type="AInput" name={'HorarioInicio'} label={'Horario Inicio'}>
                <Input />
              </Field>
            </Col>
          </Row>
          <Row justify={'space-between'}>
            <Col sm={8}>
              <Field type="AInput" name={'HorarioAbertura'} label={'Horario Abertura'}>
                <Input />
              </Field>
            </Col>
            <Col sm={8}>
              <Field type="AInput" name={'NomeTorneio'} label={'Nome Torneio'}>
                <Input />
              </Field>
            </Col>
            <Col sm={5}>
              <Field type={'ADatePicker'} name={'DataTorneio'} label={'Data Torneio'}>
                <InputDate name={'DataTorneio'} label={'Data Torneio'} action={adminActionCreators} />
              </Field>
            </Col>
          </Row>
          <Row justify={'space-between'}>
            <Col sm={24}>
              <Field type="ATextarea" name={'Descricao'} label={'Descricao'}>
                <Input />
              </Field>
            </Col>
          </Row>
          <Row>
            <Col>
              <PopConfirm
                title={Msg.message.ON_POST}
                okText={Msg.message.YES}
                cancelText={Msg.message.NO}
                onConfirm={this.onFinish}
                button={
                  <Button type="primary" className={'submitCustom'} htmlType="submit">
                    Cadastrar Torneio
                  </Button>
                }
              ></PopConfirm>
            </Col>
            <Col className="ml-4">
              <PopConfirm
                title={Msg.message.ON_DELETES}
                okText={Msg.message.YES}
                cancelText={Msg.message.NO}
                onConfirm={this.onDelete}
                button={
                  <Button type="danger" className={'submitCustom2'} htmlType="submit">
                    Excluir Torneios Concluido
                  </Button>
                }
              ></PopConfirm>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default dadosEndereco;
