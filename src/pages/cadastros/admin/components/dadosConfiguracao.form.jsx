import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Input, Row, Col, Select, Button } from 'antd';
import Field from '~/components/field/field.component';
import TypeArray from '~/helpers/typeArray';

class dadosConfiguracao extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    const isView = this.props.prefix == 'V' ? true : false;
    return (
      <Row>
        <Col sm={24}>
          <Row justify={'space-between'}>
            <Col sm={5}>
              <Field type="ASelect" name={'ClienteAtivo'} label="Cliente Ativo" isView={isView}>
                <Select.Option key={'Sim'}>Sim</Select.Option>
                <Select.Option key={'Nao'}>Nao</Select.Option>
              </Field>
            </Col>
            <Col sm={17}>
              <Field
                type="ATextarea"
                name={'Observacao'}
                label="Observacoes"
                rules={[{ type: 'string' }]}
                isView={isView}
              >
                <Input.TextArea />
              </Field>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default dadosConfiguracao;
