import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';
import { Row, Col } from 'antd';
import { store } from '~/store';
import * as perfilActionCreators from '~/store/modules/cadastros/perfil/perfil.actions';
import './perfil.css';
import DadosPessoais from '../container/dadosPessoais';
import PerfilContainer from '../container/perfil';

class Perfil extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async componentDidMount() {
    await store.dispatch(perfilActionCreators.getPerfil());
  }

  setPerfil(data) {
    store.dispatch(perfilActionCreators.setPerfil(data));
  }

  render() {
    return (
      <>
        <Form layout="vertical" onFinish={this.setPerfil} state={store.getState().perfil}>
          <Row className="pb-2">
            <Col sm={16} className={'m-3'}>
              <DadosPessoais />
            </Col>
            <PerfilContainer />
          </Row>
        </Form>
      </>
    );
  }
}

Perfil = connect(Perfil);
export default reduxForm({
  form: 'Perfil', // a unique identifier for this form
})(Perfil);
