import { FC } from 'react';
import { Tabs } from 'antd';

import { PageTitle } from 'components';

import { PatientData, PatientOverview } from './components';

const { TabPane } = Tabs;

export const PatientDetails: FC = () => {
  return (
    <>
      <PageTitle
        title="Detalhamento do paciente"
        subtitle="Veja o histórico de refeições e atualize os dados do paciente"
      />

      <Tabs defaultActiveKey="patient-overview">
        <TabPane tab="Visão geral" key="patient-overview">
          <PatientOverview />
        </TabPane>
        <TabPane tab="Dados pessoais" key="patient-data">
          <PatientData />
        </TabPane>
      </Tabs>
    </>
  );
};
