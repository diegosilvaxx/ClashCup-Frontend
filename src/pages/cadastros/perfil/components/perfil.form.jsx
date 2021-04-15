import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';
import { Row, Col, Input } from 'antd';
import Field from '~/components/field/field.component';
import logoHorizontal from '~/assets/LogoHorizontal.png';
import trofeu from '~/assets/trofeuIcone.png';
import { store } from '~/store';
import * as perfilActionCreators from '~/store/modules/cadastros/perfil/perfil.actions';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PassportGrid from '../container/passport.grid';
import './perfil.css';

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
              <h1 className="mt-3 mb-3">Dados Pessoais</h1>
              <Row>
                <Col sm={24}>
                  <Row justify={'space-between'}>
                    <Col sm={11}>
                      <Field type="AInput" name={'Nome'} label="Nome">
                        <Input />
                      </Field>
                    </Col>
                    <Col sm={11}>
                      <Field type="AInput" name={'Email'} label="Email">
                        <Input disabled={true} />
                      </Field>
                    </Col>
                  </Row>
                  <Row justify={'space-between'}>
                    <Col sm={11}>
                      <Field type="AInput" name={'Celular'} label="Celular">
                        <Input />
                      </Field>
                    </Col>
                    <Col sm={11}>
                      <Field disabled={true} type="AInput" name={'IdClash'} label="IdClash">
                        <Input />
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <h3>Redefinição de Senha </h3>
                  </Row>
                  <Row justify={'space-between'}>
                    <Col sm={8}>
                      <Field disabled={true} type="AInput" name={'SenhaAntiga'} label="Senha Antiga">
                        <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                      </Field>
                    </Col>
                    <Col sm={6}>
                      <Field disabled={true} type="AInput" name={'NovaSenha'} label="Nova Senha">
                        <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                      </Field>
                    </Col>
                    <Col sm={6}>
                      <Field disabled={true} type="AInput" name={'ConfirmaSenha'} label="Confirme a senha">
                        <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <PassportGrid key="passportGridPerfil" />
                    </Col>
                  </Row>
                  <Row>
                    <button type="submit" className="btn btn-success mt-3">
                      Salvar
                    </button>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={7}>
              {/* <img alt={'troféu'} src={logoHorizontal} style={{ width: '100%', maxWidth: 500, marginBottom: 25 }} /> */}

              <h1 className="ml-5" style={{ marginTop: 40 }}>
                Perfil
              </h1>

              <Row className={'ml-5'} style={{ border: '1px solid', display: 'flex', justifyContent: 'center' }}>
                <Col sm={24}>
                  <Row className="ml-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Col sm={14}>
                      <Row>
                        <h3>Scolfild</h3>
                      </Row>
                      <Row>
                        <strong style={{ marginTop: -18, marginBottom: 18 }}>#lçksdlf</strong>
                      </Row>
                      <Row>
                        <img alt={'troféu'} src={trofeu} style={{ width: '40px', marginBottom: 0, zIndex: 2 }} />
                        <label className="label">2356</label>
                      </Row>
                    </Col>
                    <Col className="m-2" sm={8} style={{ display: 'flex', alignSelf: 'center' }}>
                      <img
                        alt={'troféu'}
                        src={logoHorizontal}
                        style={{ width: '100%', height: '100%', marginBottom: 0 }}
                      />
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
                      <label className={'buttonBlack'}>2356</label>
                    </Col>
                    <Col sm={10} className="mr-2">
                      <strong style={{ color: '#1575E5' }}>Carta favorita</strong>

                      <p className={'buttonBlack'}>2356</p>
                    </Col>
                  </Row>
                  <Row className="rowFlex">
                    <Col sm={10} className="ml-2">
                      <strong style={{ color: '#1575E5' }}>Vitórias 3 coroas</strong>
                      <label className={'buttonBlack'}>2356</label>
                    </Col>
                    <Col sm={10} className="mr-2">
                      <strong style={{ color: '#1575E5' }}>Carta encontradas</strong>

                      <p className={'buttonBlack'}>2356</p>
                    </Col>
                  </Row>
                  <Row className="rowFlex">
                    <Col sm={10} className="ml-2">
                      <strong style={{ color: '#1575E5' }}>Max. troféus</strong>
                      <label className={'buttonBlack'}>2356</label>
                    </Col>
                    <Col sm={10} className="mr-2">
                      <strong style={{ color: '#1575E5' }}>Total doações</strong>

                      <p className={'buttonBlack'}>2356</p>
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
                      <label className={'buttonBlack'}>2356</label>
                    </Col>
                    <Col sm={10} className="mr-2">
                      <strong style={{ color: '#1575E5' }}>N° partipações</strong>

                      <p className={'buttonBlack'}>2356</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
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
