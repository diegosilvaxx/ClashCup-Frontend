import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import autoBind from 'react-autobind';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './menulateral.css';
import actionsMenuLateral from './menuLateral.actions';

const { SubMenu } = Menu;
const { Sider } = Layout;

class menulateral extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { collapsed: false };
  }

  handleClick = data => {
    actionsMenuLateral(data);
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          className={'MenuLateral'}
          onClick={this.handleClick}
        >
          <Menu.Item key="1">Torneios</Menu.Item>
          <Menu.Item key="cadastroCliente">Ranking</Menu.Item>
          <Menu.Item key="inscrevaSe">Inscreva-se</Menu.Item>
          <Menu.Item key="7">Perfil</Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default menulateral;
