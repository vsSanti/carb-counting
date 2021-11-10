import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { Meal } from '@/screens/Meal';
import { User } from '@/screens/User';

import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Screen
        name="Lista"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Refeição"
        component={Meal}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Usuário"
        component={User}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
