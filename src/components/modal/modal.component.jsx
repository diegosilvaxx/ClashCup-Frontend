import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Grid from '~/components/grid/grid.component';
import connect from '~/components/connect/connect';

const ModalComponent = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const result = [];
  const columns = [
    {
      title: 'Posição',
      dataIndex: 'posicao',
      key: 'posicao',
      sorter: (a, b) => a.posicao.localeCompare(b.posicao),
    },
    {
      title: 'Jogador',
      dataIndex: 'jogador',
      key: 'jogador',
    },
    {
      title: 'Vitórias',
      dataIndex: 'vitoria',
      key: 'vitoria',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detalhes
      </Button>
      <Modal width={650} title={'Detalhes do Torneio'} visible={isModalVisible} onCancel={handleOk} onOk={handleOk}>
        <Grid
          key={'gridModalDetalhesPassport'}
          columns={columns}
          title="Ranking"
          data={result}
          className="m-0"
          emptyText="Você ainda não possui nenhum passaporte!"
        />
      </Modal>
    </>
  );
};

export default connect(ModalComponent);
