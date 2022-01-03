import { FC } from 'react';
import { Col, Pagination, Row } from 'antd';

import { PageTitle } from 'components';
import { patients } from 'utils';

import { PatientCard } from './components/PatientCard';

export const PatientsList: FC = () => {
  return (
    <>
      <PageTitle
        title="Pacientes"
        subtitle="Listagem de pacientes registrados no sistema"
      />

      <Row>
        {patients.map((patient) => (
          <Col key={patient.id} span={12}>
            <PatientCard data={patient} />
          </Col>
        ))}
      </Row>

      <Row>
        <Pagination defaultCurrent={1} pageSize={6} total={10} />
      </Row>
    </>
  );
};
