import React, { Component } from 'react';
import autoBind from 'react-autobind';
import * as adminActionCreators from '~/store/modules/cadastros/admin/admin.actions';
import { store } from '~/store';
import { Collapse } from 'antd';
import Ranking from './ranking.form';
import Torneio from './torneio.form';
import DadosConfiguracao from './dadosConfiguracao.form';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';
import history from 'services/history';

const { Panel } = Collapse;

class Admin extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onChangeForm(data, allData) {
    await store.dispatch(adminActionCreators.setState(allData));
  }

  onCancel() {
    history.push('/cadastroCliente/grid');
  }

  render() {
    const { prefix } = this.props;
    return (
      <>
        <Form onValuesChange={this.onChangeForm} layout="vertical" state={store.getState().cadastroCliente}>
          <Collapse defaultActiveKey={['1', '2']} className={'collapseCustom'}>
            <Panel collapsible="disabled" header="Ranking" key="1">
              <Ranking prefix={prefix} />
            </Panel>
            <Panel collapsible="disabled" header="Torneio" key="2">
              <Torneio prefix={prefix}></Torneio>
            </Panel>
            <Panel header="Passport" key="3" collapsible="header">
              <DadosConfiguracao prefix={prefix} />
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
