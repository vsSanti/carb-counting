import React from 'react';

import { useAuth } from '@/hooks/auth';

import { Button } from '@/components/Button';

import { Container, Title } from './styles';

export const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <Title>Home</Title>
      <Button title="logout" onPress={logout} />
    </Container>
  );
};
