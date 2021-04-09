import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col, Typography, Table } from 'antd';
import connect from '~/components/connect/connect';
import RemoveReferencia from '~/helpers/removeReferenciaArray';

const { Title } = Typography;
class Grid extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    let { columns, data, title, style, emptyText } = this.props;
    let result = RemoveReferencia(data);
    return (
      <>
        <Row justify={'space-between'}>
          <Col className={style || 'mt-4 ml-4 mr-4'}>
            <Title level={3}>{title}</Title>
          </Col>
        </Row>
        <Row>
          <Col md={24} className={style || 'px-4'}>
            <Table bordered={true} columns={columns} dataSource={result[0]} locale={{ emptyText: emptyText }} />
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(Grid);
