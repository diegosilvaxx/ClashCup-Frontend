import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import Grid from '~/components/grid/grid.component';
import connect from '~/components/connect/connect';
import { getRanking } from '~/store/modules/cadastros/ranking/ranking.actions';
import { store } from '~/store';

const ModalComponent = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
    store.dispatch(getRanking(props.TagTorneio));
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const state = store.getState().ranking.membersList;
  useEffect(() => {
    setResult(state);
  }, [state]);

  const columns = [
    {
      title: 'Posição',
      dataIndex: 'rank',
      key: 'rank',
      sorter: (a, b) => a.posicao.localeCompare(b.posicao),
    },
    {
      title: 'Jogador',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Vitórias',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ width: '100%', fontSize: 'auto', padding: 3 }}>
        Detalhes
      </Button>
      <Modal width={650} title={'Detalhes do Torneio'} visible={isModalVisible} onCancel={handleOk} onOk={handleOk}>
        <Grid
          key={'gridModalDetalhesPassport'}
          columns={columns}
          title="Ranking"
          data={result}
          className="m-0"
          emptyText="Torneio ainda não realizado."
        />
      </Modal>
    </>
  );
};

export default connect(ModalComponent);
