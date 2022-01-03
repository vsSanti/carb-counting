import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { FC, useMemo } from 'react';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const Routes: FC = () => {
  const routes = useMemo(() => {
    // eslint-disable-next-line no-constant-condition
    return true ? <PrivateRoutes /> : <PublicRoutes />;
  }, []);

  return <ConfigProvider locale={ptBR}>{routes}</ConfigProvider>;
};

export { Routes };
