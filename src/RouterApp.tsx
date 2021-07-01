import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import FlexCol from './modules/components/FlexCol';
import Cookies from 'universal-cookie';
import { LogoutOutlined } from '@ant-design/icons';
import { refreshBrowser } from './utils/web';
import LoginPage from './pages/login';
import { useStores } from './stores/mobxStores';
import { observer } from 'mobx-react';
import SamplePage from './pages/SamplePage';


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const cookies = new Cookies();

const LogoContainer = styled(FlexCol)`
  padding: 20px 0px;
  background: #457b9d;
  font-family: AppleSDGothicNeo;

  margin-bottom: 30px;

  span {
    font-size: 16px;
    font-weight: 500;

    margin: 0;
    color: #ffffff;
  }
`;

const StyledLayout = styled(Layout)``;
const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  minheight: 280px;
`;

const RouterApp = observer(() => {
  const [collapsed, setCollapsed] = useState(false);

  const { authStore } = useStores();

  // const [isLogin, setIsLogin] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    console.log('use effect ::, ');

    const accessToken = cookies.get('accessToken');

    if (accessToken) authStore.setAccessToken(accessToken);

    // fetch();
  }, []);
  const signOut = () => {
    const cookies = new Cookies();
    cookies.remove('accessToken', { path: '/' });

    refreshBrowser();
  };
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {authStore.accessToken && (
          <Sider
          // collapsible
          // collapsed={collapsed}
          // onCollapse={onCollapse}
          >
            <LogoContainer justify="center">
              <span>BackOffice System</span>
            </LogoContainer>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                {/*<Icon type="desktop"/>*/}
                <span>home</span>
                <Link to="/" />
              </Menu.Item>
              {/*<Menu.Item key="2">*/}
              {/*  /!*<Icon type="pie-chart"/>*!/*/}
              {/*  <span>{MailManagementPageTitle}</span>*/}
              {/*  <Link to="/" />*/}
              {/*</Menu.Item>*/}

              <Menu.Item
                style={{ marginTop: 50 }}
                key={'signOut'}
                icon={<LogoutOutlined />}
              >
                <a onClick={signOut}>signOut</a>
              </Menu.Item>
            </Menu>
          </Sider>
        )}

        <StyledLayout>
          {/*<Header style={{background: '#fff', padding: 0, paddingLeft: 16}}>*/}
          <StyledContent>
            <Switch>
              <Route exact path="/" component={SamplePage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </StyledContent>
          <Footer style={{ textAlign: 'center' }}>Marco Song ©2021</Footer>
        </StyledLayout>
      </Layout>
    </Router>
  );
});

export default RouterApp;