/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from '@/global/styles/theme';

import { AppProvider } from '@/hooks';

import { Routes } from '@/routes';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />

      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}
