import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@/hooks/auth';

import { Loading } from '@/screens/Loading';

import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';

export const Routes: React.FC = () => {
  const { user, hasCredentials } = useAuth();

  if (!user && hasCredentials) {
    return <Loading>Carregando usuário...</Loading>;
  }

  return (
    <NavigationContainer>{user ? <AppTabRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
};
