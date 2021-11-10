import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screens/Home';
import { MealDetails } from '@/screens/MealDetails';

export type AppStackStackParamList = {
  List: undefined;
  MealDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator<AppStackStackParamList>();

export const AppStackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="List" component={Home} />
      <Screen name="MealDetails" component={MealDetails} />
    </Navigator>
  );
};
