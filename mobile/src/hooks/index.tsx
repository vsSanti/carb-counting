import React from 'react';

import { AuthProvider } from './auth';
import { FoodProvider } from './food';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <FoodProvider>{children}</FoodProvider>
    </AuthProvider>
  );
};

export { AppProvider };
