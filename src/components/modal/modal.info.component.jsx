import React, { useState } from 'react';
import { Modal } from 'antd';
import connect from '~/components/connect/connect';
import info from '~/assets/info.png';
import idClash from '~/assets/Tag.png';

const ModalComponent = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <img
        src={info}
        style={{ width: 30, height: 30, marginLeft: 3, marginTop: 7, cursor: 'pointer' }}
        alt="IdClash"
        onClick={showModal}
      />
      <Modal
        width={650}
        title={'Como conseguir o IdClash!'}
        visible={isModalVisible}
        onCancel={handleOk}
        onOk={handleOk}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ display: 'grid' }}>
          <img src={idClash} alt="IdClash" style={{ borderRadius: 7 }} />
        </div>
      </Modal>
    </>
  );
};

export default connect(ModalComponent);
