import React from 'react';

import { Container, Title } from './styles';

export const Loading: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>{children || 'Carregando...'}</Title>
    </Container>
  );
};
