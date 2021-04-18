import React, { Component } from 'react';
import { Row, Col } from 'antd';
import logoHorizontal from '~/assets/LogoHorizontal.png';
import trofeu from '~/assets/trofeuIcone.png';
import { store } from '~/store';
import '../components/perfil.css';

class perfil extends Component {
  render() {
    const result = store.getState().perfil;
    console.log(result);
    return (
      <Col sm={7}>
        <h1 className="ml-5" style={{ marginTop: 40 }}>
          Perfil
        </h1>

        <Row className={'ml-5'} style={{ border: '1px solid', display: 'flex', justifyContent: 'center' }}>
          <Col sm={24}>
            <Row className="ml-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Col sm={14}>
                <Row>
                  <h3>{result.NomeClash}</h3>
                </Row>
                <Row>
                  <strong style={{ marginTop: -18, marginBottom: 18 }}>{result.IdClash}</strong>
                </Row>
                <Row>
                  <img alt={'troféu'} src={trofeu} style={{ width: '40px', marginBottom: 0, zIndex: 2 }} />
                  <label className="label">{result.Trofeu}</label>
                </Row>
              </Col>
              <Col className="m-2" sm={8} style={{ display: 'flex', alignSelf: 'center' }}>
                <img alt={'troféu'} src={logoHorizontal} style={{ width: '100%', height: '100%', marginBottom: 0 }} />
              </Col>
            </Row>
            <Row style={{ width: '100%' }}>
              <label
                style={{
                  background: '#1575E5',
                  color: '#fff',
                  border: '1px',
                  borderRadius: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  width: '100%',
                  margin: 10,
                }}
              >
                Estatísticas Royale
              </label>
            </Row>
            <Row className="rowFlex">
              <Col sm={10} className="ml-2">
                <strong style={{ color: '#1575E5' }}>Vitórias</strong>
                <label className={'buttonBlack'}>{result.Vitoria}</label>
              </Col>
              <Col sm={10} className="mr-2">
                <strong style={{ color: '#1575E5' }}>Carta favorita</strong>

                <p className={'buttonBlack'}>{result.CartaFavorita}</p>
              </Col>
            </Row>
            <Row className="rowFlex">
              <Col sm={10} className="ml-2">
                <strong style={{ color: '#1575E5' }}>Vitórias 3 coroas</strong>
                <label className={'buttonBlack'}>{result.VitoriaTres}</label>
              </Col>
              <Col sm={10} className="mr-2">
                <strong style={{ color: '#1575E5' }}>Derrotas</strong>

                <p className={'buttonBlack'}>{result.Derrota}</p>
              </Col>
            </Row>
            <Row className="rowFlex">
              <Col sm={10} className="ml-2">
                <strong style={{ color: '#1575E5' }}>Max. troféus</strong>
                <label className={'buttonBlack'}>{result.MaxTrofeu}</label>
              </Col>
              <Col sm={10} className="mr-2">
                <strong style={{ color: '#1575E5' }}>Total doações</strong>

                <p className={'buttonBlack'}>{result.Doacao}</p>
              </Col>
            </Row>
            <Row style={{ width: '100%' }}>
              <label
                style={{
                  background: '#1575E5',
                  color: '#fff',
                  border: '1px',
                  borderRadius: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  width: '100%',
                  margin: 10,
                }}
              >
                Estatísticas ClashCup
              </label>
            </Row>
            <Row className="rowFlex">
              <Col sm={10} className="ml-2">
                <strong style={{ color: '#1575E5' }}>Melhor Posição</strong>
                <label className={'buttonBlack'}>{result.MelhorPosicao}</label>
              </Col>
              <Col sm={10} className="mr-2">
                <strong style={{ color: '#1575E5' }}>N° participações</strong>

                <p className={'buttonBlack'}>{result.NumeroParticipações}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default perfil;
