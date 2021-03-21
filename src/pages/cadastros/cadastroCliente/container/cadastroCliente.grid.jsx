import React, { Component } from 'react';
import Grid from '~/components/grid/grid.component';
import { Space, Button } from 'antd';
import autoBind from 'react-autobind';
import { store } from '~/store';
import connect from '~/components/connect/connect';
import * as cadastroClienteActionCreators from '~/store/modules/cadastros/cadastroCliente/cadastroCliente.actions';
import PopConfirm from '~/components/popConfirm/popConfirm.component';
import Msg from '~/helpers/msgGlobal';
import history from '~/services/history';
import Filter from '~/components/grid/grid.filter';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async componentDidMount() {
    await store.dispatch(cadastroClienteActionCreators.filterCliente());
  }

  async Excluir(id) {
    await store.dispatch(cadastroClienteActionCreators.deleteCliente(id));
  }

  Editar(data) {
    history.push({
      pathname: '/cadastroCliente/edit',
      state: { id: data.codigo },
    });
  }

  View(data) {
    history.push({
      pathname: '/cadastroCliente/view',
      state: { id: data.codigo },
    });
  }

  render() {
    const columns = [
      {
        title: 'Código',
        dataIndex: 'codigo',
        key: 'codigo',
        sorter: (a, b) => a.codigo.localeCompare(b.codigo),
      },
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
        ...Filter.getColumnSearchProps('nome', 'Nome'),
      },
      {
        title: 'CPF/CNPJ',
        dataIndex: 'cpfCnpj',
        key: 'cpfCnpj',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
        ...Filter.getColumnSearchProps('cpfCnpj', 'CPF/CNPJ'),
      },
      {
        title: 'Tipo Cliente',
        dataIndex: 'tipoCliente',
        key: 'tipoCliente',
      },
      {
        title: 'Ativo',
        key: 'ativo',
        dataIndex: 'ativo',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={() => this.View(record)}>Visualizar</Button>
            <Button onClick={() => this.Editar(record)}>Editar</Button>
            <PopConfirm
              title={Msg.message.ON_DELETE}
              okText={Msg.message.YES}
              cancelText={Msg.message.NO}
              onConfirm={() => this.Excluir(record)}
              button={<Button>Excluir</Button>}
            ></PopConfirm>
          </Space>
        ),
      },
    ];

    return (
      <Grid
        columns={columns}
        title="Clientes"
        newRoute="/cadastroCliente/new"
        data={store.getState().cadastroCliente.FilterCliente}
      />
    );
  }
}

export default connect(Container);
