import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';
import { Row, Col } from 'antd';
import Card from '~/components/card/card.component';
import trofeu from '~/assets/trofeu.png';
import { store } from '~/store';
import * as torneioActionCreators from '~/store/modules/cadastros/torneio/torneio.actions';

class Pagamento extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async componentDidMount() {
    await store.dispatch(torneioActionCreators.getTorneio());
  }

  render() {
    let result = store.getState().torneio;
    console.log(result);
    return (
      <>
        <Form layout="vertical">
          <Row className="pb-2">
            <Col sm={18}>
              <Row>
                {result.torneio &&
                  [{}, {}].map(x => (
                    <Col sm={8} key={x.id}>
                      <Row>
                        <Col>
                          <Card
                            dataTorneio={new Date(x.dataTorneio).toLocaleDateString()}
                            title={x.nomeTorneio}
                            id={x.id}
                            descricao={x.descricao}
                          />
                        </Col>
                      </Row>
                    </Col>
                  ))}
              </Row>
            </Col>

            <Col sm={6}>
              <h1 className="m-3">Torneios</h1>
              <img
                alt={'troféu'}
                src={trofeu}
                style={{ width: '100%', maxWidth: 500, height: '400', marginBottom: 25 }}
              />
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

Pagamento = connect(Pagamento);
export default reduxForm({
  form: 'Torneio', // a unique identifier for this form
})(Pagamento);
