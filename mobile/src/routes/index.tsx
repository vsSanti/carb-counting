import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import { useAuth } from '@/hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export const Routes: React.FC = () => {
  const { user, hasCredentials } = useAuth();

  if (!user && hasCredentials) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
};
