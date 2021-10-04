import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

type Props = {
  color?: 'dark';
};

export const ActivityIndicator: React.FC<Props> = ({ color }) => {
  const theme = useTheme();

  return (
    <RNActivityIndicator
      color={color === 'dark' ? theme.colors.primary : theme.colors.shape}
    />
  );
};
