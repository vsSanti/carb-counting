import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@/hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export const Routes: React.FC = () => {
  const { user, loadingUser } = useAuth();

  return (
    <NavigationContainer>
      {user || loadingUser ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
