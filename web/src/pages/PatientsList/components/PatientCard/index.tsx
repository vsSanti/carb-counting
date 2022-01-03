import { FC } from 'react';
import { Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import { Patient } from '@types';

import './styles.scss';

type Props = {
  data: Patient;
};

export const PatientCard: FC<Props> = ({ data }) => {
  return (
    <NavLink to="/patients/details">
      <Card className="patient-card-wrapper">
        <img
          className="patient-image"
          alt="Imagem do paciente"
          src={`https://ui-avatars.com/api/?name=${data.name}`}
        />

        <div className="general-infos">
          <span className="patient-main-info">{data.name}</span>
          <span className="patient-info">{data.sex}</span>
          <span className="patient-info">{data.birthDate}</span>
        </div>

        <div className="details-icon">
          <RightOutlined />
        </div>
      </Card>
    </NavLink>
  );
};
