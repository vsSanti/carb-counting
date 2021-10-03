import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  loading?: boolean;
  color?: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, color, onPress, loading = false }) => {
  const theme = useTheme();

  return (
    <Container color={color || theme.colors.secondary} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
