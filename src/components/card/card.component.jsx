import React, { Component } from 'react';
import { Card, Input, Row, Col, Button } from 'antd';
import autoBind from 'react-autobind';
import history from 'services/history';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { title, dataTorneio, id, descricao } = this.props;
    const state = { dataTorneio, title, id };
    return (
      <Card
        style={{ width: 255, height: 310, margin: 20, backgroundColor: 'black', borderRadius: 4 }}
        headStyle={{ color: 'white' }}
        title={title || 'Torneio'}
        extra={
          <a onClick={() => history.push('/inscrevaSe', state)} style={{ color: 'aqua' }}>
            Inscreva-se
          </a>
        }
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
            <p style={{ color: 'white' }}>1000/1000</p>
          </Col>
        </Row>
        <p style={{ color: 'white' }} className="mt-2">
          Grande Torneio Clash Cup
        </p>
        <p style={{ color: 'white' }}>
          {descricao ||
            'Se junte aos melhores jogadores de Clash Royale em busca da 1° colocação para ganhar o prêmio máximo.'}
        </p>
      </Card>
    );
  }
}

export default CardComponent;
