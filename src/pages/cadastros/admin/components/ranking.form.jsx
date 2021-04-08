import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Input, Row, Col, Radio, Button } from 'antd';
import Field from '~/components/field/field.component';
import { store } from '~/store';
import * as adminActionCreators from '~/store/modules/cadastros/admin/admin.actions';
import PopConfirm from '~/components/popConfirm/popConfirm.component';
import Msg from '~/helpers/msgGlobal';

class dadosPessoais extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onFinish() {
    await store.dispatch(adminActionCreators.updateRanking());
  }

  render() {
    return (
      <Row>
        <Col sm={24}>
          <Row>
            <Col sm={24}>
              <Field type="AInput" name={'IdTorneio'} label="Id Torneio">
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
                onConfirm={() => this.onFinish()}
                button={
                  <Button type="primary" className={'submitCustom'} htmlType="submit" onClick={this.onFinish}>
                    Atualizar Ranking
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

export default dadosPessoais;
