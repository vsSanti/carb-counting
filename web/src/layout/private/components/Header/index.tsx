import { Button, Layout } from 'antd';
import { FC } from 'react';

import './styles.scss';

const { Header: AntdHeader } = Layout;

export const Header: FC = () => {
  return (
    <AntdHeader id="main-header">
      <div id="user-name">Olá, Especialista</div>
      <Button onClick={() => {}} type="link">
        Sair
      </Button>
    </AntdHeader>
  );
};
