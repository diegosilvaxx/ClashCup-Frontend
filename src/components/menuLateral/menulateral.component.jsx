import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import autoBind from 'react-autobind';
import './menulateral.css';
import actionsMenuLateral from './menuLateral.actions';
import { store } from '~/store';

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
    const result = store.getState().auth;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          className={'MenuLateral'}
          onClick={this.handleClick}
        >
          <Menu.Item key="torneio">Torneios</Menu.Item>
          <Menu.Item key="ranking">Ranking</Menu.Item>
          <Menu.Item key="perfil">Perfil</Menu.Item>
          {result.IsAdmin && <Menu.Item key="admin">Admin</Menu.Item>}
        </Menu>
      </Sider>
    );
  }
}

export default menulateral;
