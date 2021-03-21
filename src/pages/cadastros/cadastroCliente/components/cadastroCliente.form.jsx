import React, { Component } from 'react';
import autoBind from 'react-autobind';
import * as cadastroClienteActionCreators from '~/store/modules/cadastros/cadastroCliente/cadastroCliente.actions';
import { store } from '~/store';
import { Button, Row, Col, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import PopConfirm from '~/components/popConfirm/popConfirm.component';
import Msg from '~/helpers/msgGlobal';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';
import history from 'services/history';

const { Panel } = Collapse;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

class CadastroCliente extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onFinish() {
    const { prefix } = this.props;
    const id = this.props.data;
    switch (prefix) {
      case 'E':
        await store.dispatch(cadastroClienteActionCreators.updateCliente(id));
        break;

      default:
        await store.dispatch(cadastroClienteActionCreators.setCliente());
        break;
    }
  }

  async onChangeForm(data, allData) {
    await store.dispatch(cadastroClienteActionCreators.setState(allData));
  }

  onCancel() {
    history.push('/cadastroCliente/grid');
  }

  async componentDidMount() {
    const { prefix } = this.props;
    if (prefix != 'I') {
      const id = this.props.data;
      await store.dispatch(cadastroClienteActionCreators.getCliente(id));
    } else {
      await store.dispatch(cadastroClienteActionCreators.cleanFields());
    }
  }

  render() {
    const { prefix } = this.props;
    return (
      <>
        <Form
          onValuesChange={this.onChangeForm}
          validateMessages={validateMessages}
          onFinish={this.onFinish}
          layout="vertical"
          state={store.getState().cadastroCliente}
        >
          <Row className="pb-2">
            <Col>
              <Button type="primary" className={'submitCustom'} htmlType="submit">
                Salvar
              </Button>
              <PopConfirm
                title={Msg.message.ON_CANCEL}
                okText={Msg.message.YES}
                cancelText={Msg.message.NO}
                onConfirm={() => this.onCancel()}
                button={
                  <Link type="primary" className="returnCustom" to="/cadastroCliente/grid">
                    Voltar
                  </Link>
                }
              ></PopConfirm>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

CadastroCliente = connect(CadastroCliente);
export default reduxForm({
  form: 'CadastroCliente', // a unique identifier for this form
})(CadastroCliente);
