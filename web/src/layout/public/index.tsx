import { FC } from 'react';
import { Col, Layout, Row, Typography } from 'antd';

import { Logo } from 'components';

import './styles.scss';

const { Title } = Typography;

export const PublicLayout: FC = ({ children }) => {
  return (
    <Layout id="public-layout">
      <Row id="main-row">
        <Col span={8} xs={24} md={14} lg={8} className="content-col">
          <div className="content">{children}</div>
        </Col>

        <Col span={16} xs={0} md={10} lg={16} className="side-col">
          <Logo className="logo-img" color="white" />
          <Title level={2}>Sua contagem de carboidratos de forma simples</Title>
        </Col>
      </Row>
    </Layout>
  );
};
