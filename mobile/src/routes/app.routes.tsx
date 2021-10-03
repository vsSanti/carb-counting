import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screens/Home';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
