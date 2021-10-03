import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export const ActivityIndicator: React.FC = () => {
  const theme = useTheme();

  return <RNActivityIndicator color={theme.colors.shape} />;
};
