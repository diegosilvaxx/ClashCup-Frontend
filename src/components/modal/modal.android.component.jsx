import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import connect from '~/components/connect/connect';
import idClash from '~/assets/android.jpg';
import dica from '~/assets/dica.png';

const ModalComponent = props => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isAndroid, setAndroid] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    verifyAndroid();
  }, []);

  const verifyAndroid = () => {
    if (window.screen.width < 800 || window.screen.height < 480) {
      setAndroid(true);
    }
  };

  return (
    isAndroid && (
      <>
        <Modal
          width={650}
          title={'Novidades 😍😍🎉🎉'}
          visible={isModalVisible}
          onCancel={handleOk}
          onOk={handleOk}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p>
            O painel do jogador, ele foi desenvolvido para computador, notebook e tablets, pode ser que em dispositivos
            moveis, algumas telas fique incompatível.
            <span role="img" aria-label="sheep">
              😒
            </span>
          </p>
          <p>
            Mais não fique triste, nosso aplicativo já esta quase pronto e será lançado na Google Play Store
            <span role="img" aria-label="sheep">
              😉
            </span>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={idClash} alt="IdClash" style={{ borderRadius: 7, width: 350 }} />
          </div>
          <b style={{ margin: 10 }}>Para quem não tem computador pode usar essa dica abaixo!</b>
          <img src={dica} alt="IdClash" style={{ borderRadius: 7 }} />
        </Modal>
      </>
    )
  );
};

export default connect(ModalComponent);
