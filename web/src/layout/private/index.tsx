import { Card, Layout } from 'antd';
import { FC } from 'react';

import { Header, SideBar } from './components';

import './styles.scss';

const { Content } = Layout;

export const PrivateLayout: FC = ({ children }) => {
  return (
    <Layout id="private-layout">
      <SideBar />
      <Layout id="content-layout">
        <Header />
        <Content className="content">
          <Card>{children}</Card>
        </Content>
      </Layout>
    </Layout>
  );
};
