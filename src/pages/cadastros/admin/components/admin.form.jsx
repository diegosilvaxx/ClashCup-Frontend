import React, { Component } from 'react';
import autoBind from 'react-autobind';
import * as adminActionCreators from '~/store/modules/cadastros/admin/admin.actions';
import { store } from '~/store';
import { Button, Row, Col, Collapse } from 'antd';
import Ranking from './ranking.form';
import Torneio from './torneio.form';
import DadosConfiguracao from './dadosConfiguracao.form';
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

class Admin extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onChangeForm(data, allData) {
    debugger;
    await store.dispatch(adminActionCreators.setState(allData));
  }

  onCancel() {
    history.push('/cadastroCliente/grid');
  }

  render() {
    const { prefix } = this.props;
    return (
      <>
        <Form
          onValuesChange={this.onChangeForm}
          validateMessages={validateMessages}
          layout="vertical"
          state={store.getState().cadastroCliente}
        >
          <Collapse defaultActiveKey={['1', '2']} className={'collapseCustom'}>
            <Panel collapsible="disabled" header="Ranking" key="1">
              <Ranking validateMessages={validateMessages} prefix={prefix} />
            </Panel>
            <Panel collapsible="disabled" header="Torneio" key="2">
              <Torneio validateMessages={validateMessages} prefix={prefix}></Torneio>
            </Panel>
            <Panel header="Passport" key="3" collapsible="header">
              <DadosConfiguracao validateMessages={validateMessages} prefix={prefix} />
            </Panel>
          </Collapse>
        </Form>
      </>
    );
  }
}

Admin = connect(Admin);
export default reduxForm({
  form: 'Admin', // a unique identifier for this form
})(Admin);
