import { FC } from 'react';
import { Col, Row } from 'antd';

import { MealCharts, MealsList } from '..';

import './styles.scss';

export const PatientOverview: FC = () => {
  return (
    <Row className="patient-overview">
      <Col span={6}>
        <MealsList />
      </Col>
      <Col span={18}>
        <MealCharts />
      </Col>
    </Row>
  );
};
