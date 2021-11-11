import React from 'react';

import { Card as StyledCard } from './styles';

export const Card: React.FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
