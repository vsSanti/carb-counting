import React from 'react';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ActivityIndicator } from '@/components/ActivityIndicator';

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
      {loading ? <ActivityIndicator /> : <Title>{title}</Title>}
    </Container>
  );
};
