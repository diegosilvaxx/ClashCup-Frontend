import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, Typography, Table } from 'antd';
import { Link } from 'react-router-dom';
import connect from '~/components/connect/connect';
import RemoveReferencia from '~/helpers/removeReferenciaArray';

const { Title } = Typography;
class Grid extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    let { columns, data, title, newRoute } = this.props;
    let result = RemoveReferencia(data);
    return (
      <>
        <Row justify={'space-between'}>
          <Col className={'mt-4 ml-4 mr-4'}>
            <Title level={3}>{title}</Title>
          </Col>
          <Col className={'mt-4 ml-4 mr-4'}>
            <Link className="linkButtonNew" to={newRoute}>
              Novo
            </Link>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col md={24} className={'px-4'}>
            <Table bordered={true} columns={columns} dataSource={result[0]} />
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(Grid);
