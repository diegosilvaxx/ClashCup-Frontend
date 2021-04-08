import React, { Component } from 'react';
import Grid from '~/components/grid/grid.component';
import autoBind from 'react-autobind';
import { store } from '~/store';
import connect from '~/components/connect/connect';
import * as pagamentoActionCreators from '~/store/modules/cadastros/inscrevaSe/inscrevaSe.actions';
import { Row, Col } from 'antd';
import Modal from '~/components/modal/modal.component';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async componentDidMount() {
    await store.dispatch(pagamentoActionCreators.getPassport());
  }

  render() {
    const result = store.getState().inscrevaSe.FilterPassport;
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
      },
      {
        title: 'Data',
        dataIndex: 'data',
        key: 'dataPerfil',
      },
      {
        title: 'Senha',
        dataIndex: 'senha',
        key: 'senha',
      },
      {
        title: 'Horario de Abertura',
        dataIndex: 'horarioAbertura',
        key: 'horarioAbertura',
      },
      {
        title: 'Horario de Inicio',
        dataIndex: 'horarioInicio',
        key: 'horarioInicio',
      },
      {
        title: 'Valor Torneio',
        dataIndex: 'valorTorneio',
        key: 'valorTorneio',
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <Modal />,
      },
    ];

    return (
      <Row>
        <Col sm={24}>
          <Grid
            columns={columns}
            title="Passaportes"
            data={result}
            style="m-0"
            emptyText="Você ainda não possui nenhum passaporte!"
          />
        </Col>
      </Row>
    );
  }
}

export default connect(Container);
