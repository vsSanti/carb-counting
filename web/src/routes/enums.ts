import { CoffeeOutlined, TeamOutlined } from '@ant-design/icons';

import { FoodsList, PatientDetails, PatientsList } from 'pages';

const PATHS = {
  FOODS_LIST: {
    path: '/foods',
    key: 'foods_list',
    name: 'Alimentos',
    Component: FoodsList,
    Icon: CoffeeOutlined,
    renderSideBar: true,
  },
  PATIENT_DETAILS: {
    path: '/patients/details',
    key: 'patients_list',
    name: 'Detalhamento de pacientes',
    Component: PatientDetails,
    Icon: TeamOutlined,
    renderSideBar: false,
  },
  PATIENTS_LIST: {
    path: '/patients',
    key: 'patients_list',
    name: 'Pacientes',
    Component: PatientsList,
    Icon: TeamOutlined,
    renderSideBar: true,
  },
};

export { PATHS };
