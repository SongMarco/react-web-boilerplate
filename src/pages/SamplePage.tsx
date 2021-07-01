import { useEffect, useState } from 'react';
import UserAPI from '../modules/apis/adminUser';
import { Button, message, Popconfirm, Spin } from 'antd';
import EmailAPI, { EmailRow } from '../modules/apis/emails';
import FlexCol from '../modules/components/FlexCol';
import FlexRow from '../modules/components/FlexRow';

const columns = [
  {
    title: 'index',
    dataIndex: 'index',
  },
  {
    title: 'email',
    dataIndex: 'email',
  },
];
const sheetLink =
    'https://docs.google.com/spreadsheets/d/1GhgfCjVKZSzC4FnzrGw4RFnQOFmg5dKw81EMrsniR2U';

export const MailManagementPageTitle = 'SamplePage';
const SamplePage = () => {

  useEffect(() => {
    console.log('use effect ::, ');

    const fetch = async () => {
      const getProfileRes = await UserAPI.getProfile();
      console.log('-> getProfileRes', getProfileRes);
    };

    fetch();
  }, []);

  return (
      <div>
        <h2>{MailManagementPageTitle}</h2>
        <FlexCol gutter={20} align="start">
            <FlexRow gutter={20}>

            </FlexRow>
        </FlexCol>
      </div>
  );
};

export default SamplePage;