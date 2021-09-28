import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default function App(): React.ReactElement {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
