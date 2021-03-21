import React from 'react';
import Header from 'components/navbar/navbar.component';
import GlobalStyle from '../styles/global';
import { Layout } from 'antd';
import MenuLateral from 'components/menuLateral/menulateral.component';
import Breadcrumb from 'components/breadcrumb/breadcrumb.component';
const { Content } = Layout;

const layoutRoute = props => {
  const component = { ...props.children };
  return (
    <Layout className={'LayoutGlobal'}>
      <Header />
      <Layout>
        <MenuLateral />
        <Layout className={'overflowInvisible'}>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb />
            <Content className="site-layout-background tableCustom">
              <GlobalStyle />
              {component}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default layoutRoute;
