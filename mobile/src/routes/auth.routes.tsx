import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '@/screens/Login';
import { SignUp } from '@/screens/SignUp';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
