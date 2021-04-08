import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Typography, Space } from 'antd';
import actionsNavbar from './navbar.actions';
import trofeu from '~/assets/LogoHorizontal.png';
import './navbar.css';

const { Text } = Typography;
const { Header } = Layout;
const { SubMenu } = Menu;

class navbar extends Component {
  handleClick = data => {
    actionsNavbar(data);
  };

  render() {
    return (
      <Header className="header">
        <Row justify={'space-between'}>
          <Col>
            <Space direction="vertical">
              <img alt={'troféu'} src={trofeu} style={{ width: '100%', maxWidth: 120, marginLeft: -30 }} />
            </Space>
          </Col>
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ textAlign: 'right' }}
              defaultSelectedKeys={['1']}
              onClick={this.handleClick}
            >
              <SubMenu key="admim" icon={<LaptopOutlined />} title="Admin">
                <Menu.Item key="perfil">Perfil</Menu.Item>
                <Menu.Item key="sair">Sair</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default navbar;
