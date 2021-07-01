import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLayout = styled(Layout)`

  height: 100%
`;
const { Header, Sider, Content } = Layout;

export const DefaultLayout = (children: any) => {

  return <StyledLayout>
    <Sider>
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1'>
          {/*<Icon type="pie-chart"/>*/}
          <span>Deshboard</span>
          <Link to='/' />
        </Menu.Item>
        <Menu.Item key='2'>
          {/*<Icon type="desktop"/>*/}
          <span>users</span>
          <Link to='/users' />
        </Menu.Item>


      </Menu>
    </Sider>
    <Layout className='site-layout'>
      <Header className='site-layout-background' style={{ padding: 0 }}>
        {/*{React.createElement(*/}
        {/*    this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {*/}
        {/*      className: 'trigger', onClick: this.toggle,*/}
        {/*    })}*/}
      </Header>
      <Content
        className='site-layout-background'
        style={{
          margin: '24px 16px', padding: 24, minHeight: 800,
        }}
      >
        {/*{children}*/}
      </Content>
    </Layout>
  </StyledLayout>;
};