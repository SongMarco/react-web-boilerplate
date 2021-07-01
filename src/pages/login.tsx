import React from 'react';
import { Button, Form, Input, Layout } from 'antd';
import styled from 'styled-components';
import CompanyLogo from '../assets/company-logo.png';
import FlexCol from '../modules/components/FlexCol';
import UserAPI from '../modules/apis/adminUser';
import { AxiosError } from 'axios';
import { navigate } from '../utils/web';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useStores } from '../stores/mobxStores';

export const LoginAdminLayout = styled(Layout)`
  /* padding: 20% 30% 0 30%; */
  max-width: 400px;
  margin: 150px auto 0 auto;
  padding: 0 20px;

  background: none;

  form {
    width: 300px;
  }
`;

const LoginPage = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const cookies = new Cookies();
  const { authStore } = useStores();

  const onFinish = async (values: { loginId: string; password: string }) => {
    console.log('values', values);

    try {
      const loginRes = await UserAPI.login(values.loginId, values.password);
      console.log('-> data', loginRes);

      cookies.set('accessToken', loginRes.accessToken, {
        maxAge: 3600 * 1,
        path: '/',
      });

      authStore.setAccessToken(loginRes.accessToken);

      // console.log(data);

      navigate(history, '/');
    } catch (e) {
      console.error(e);
      const error = e as AxiosError;

      const errorStatus = error?.response?.status;
      if (errorStatus && errorStatus === 401) {
        alert('Wrong ID or Password');
      }
    }
  };
  return (
    <LoginAdminLayout style={{ textAlign: 'center' }}>
      <FlexCol gutter={12}>
        <img width={120} src={CompanyLogo} />
        <h2>Welcome</h2>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          requiredMark={false}
          layout={'vertical'}
          colon={false}
          initialValues={{ channelId: '1' }}
          scrollToFirstError
        >
          <Form.Item name="loginId" label={'ID'}>
            <Input size={'large'} />
          </Form.Item>

          <Form.Item name="password" label={'Password'}>
            <Input type={'password'} size={'large'} />
          </Form.Item>

          <Form.Item noStyle={true}>
            <Button
              // disabled={disabled}
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: 24, height: 50, fontSize: 20 }}
            >
              SignIn
            </Button>
          </Form.Item>
        </Form>
      </FlexCol>
    </LoginAdminLayout>
  );
};

export default LoginPage;