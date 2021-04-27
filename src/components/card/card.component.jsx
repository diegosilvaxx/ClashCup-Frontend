import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import autoBind from 'react-autobind';
import history from 'services/history';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { title, dataTorneio, id, descricao, numeroJogadores } = this.props;
    const state = { dataTorneio, title, id };
    return (
      <>
        <Card
          style={{
            width: '100%',
            maxWidth: 260,
            height: 320,
            margin: 20,
            marginBottom: 4,
            backgroundColor: 'black',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          headStyle={{ color: 'white' }}
          title={title || 'Torneio'}
          // extra={}
          //extra={<a href={`inscrevaSe/${id}/${title}`}>Inscreva-se</a>}
        >
          <Row justify={'space-between'}>
            <Col sm={13} style={{ border: '1px solid #fff', borderRadius: 4, padding: 4 }}>
              <p style={{ color: 'white' }}>Data do Torneio</p>
              <p style={{ color: 'white' }}>{dataTorneio}</p>
            </Col>
            <Col
              sm={9}
              className="ml-2"
              style={{ border: '1px solid #fff', borderRadius: 4, padding: 4, textAlign: 'center' }}
            >
              <p style={{ color: 'white' }}>Vagas</p>
              <p style={{ color: 'white' }}>{numeroJogadores}/1000</p>
            </Col>
          </Row>
          <p style={{ color: 'white' }} className="mt-2">
            Grande Torneio Clash Cup
          </p>
          <p style={{ color: 'white' }}>
            {descricao || 'Se junte aos melhores jogadores de Clash Royale em busca da 1°'}
          </p>
        </Card>
        <button
          onClick={() => history.push('/inscrevaSe', state)}
          style={{
            color: 'aqua',
            cursor: 'pointer',
            border: 'solid 2px',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            marginLeft: 20,
            backgroundColor: 'black',
            zIndex: 999999,
          }}
        >
          Inscreva-se
        </button>
      </>
    );
  }
}

export default CardComponent;
