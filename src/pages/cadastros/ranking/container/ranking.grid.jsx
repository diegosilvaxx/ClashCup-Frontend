import React, { Component } from 'react';
import Grid from '~/components/grid/grid.component';
import autoBind from 'react-autobind';
import { store } from '~/store';
import connect from '~/components/connect/connect';
import * as rankingActionCreators from '~/store/modules/cadastros/ranking/ranking.actions';
import Filter from '~/components/grid/grid.filter';
import { Row, Col } from 'antd';
import trofeu from '~/assets/cavaleiro.png';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async componentDidMount() {
    await store.dispatch(rankingActionCreators.filterRanking());
  }

  render() {
    const result = store.getState().ranking.FilterRanking;
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
      },
      {
        title: 'Player',
        dataIndex: 'player',
        key: 'player',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
        ...Filter.getColumnSearchProps('player', 'Player'),
      },
      {
        title: 'Clã',
        dataIndex: 'cla',
        key: 'cla',
        sorter: (a, b) => a.nome.localeCompare(b.nome),
        ...Filter.getColumnSearchProps('cla', 'Clã'),
      },
      {
        title: 'Arena',
        dataIndex: 'arena',
        key: 'arena',
      },
      {
        title: 'Trófeu',
        dataIndex: 'trofeu',
        key: 'trofeu',
      },
      {
        title: 'Vitórias Clash Cup',
        key: 'vitoria',
        dataIndex: 'vitoria',
      },
    ];

    return (
      <Row>
        <Col sm={20}>
          <Grid columns={columns} title="Ranking" data={result} emptyText="Sem registros!" />
        </Col>
        <Col sm={4}>
          <img alt={'troféu'} src={trofeu} style={{ width: '100%', maxWidth: 500, height: '400', marginBottom: 25 }} />
        </Col>
      </Row>
    );
  }
}

export default connect(Container);
