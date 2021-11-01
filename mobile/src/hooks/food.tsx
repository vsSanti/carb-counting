import React, { createContext, useContext, useEffect } from 'react';

import { useAuth } from '@/hooks/auth';

import { useFetch } from '@/services';
import { DataProps } from '@/services/useFetch/types';

interface Credentials {
  id: string;
  group: string;
  description: string;
}

interface FoodContextData {
  foods?: DataProps<Credentials>;
  loadingFoods: boolean;
}

const FoodContext = createContext<FoodContextData>({} as FoodContextData);

const FoodProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const {
    get: getFoods,
    response: foods,
    loading: loadingFoods,
  } = useFetch<Credentials>({
    apiType: 'meal',
  });

  useEffect(() => {
    if (!user) return;

    getFoods({ url: '/foods' });
  }, [getFoods, user]);

  return (
    <FoodContext.Provider value={{ foods, loadingFoods }}>
      {children}
    </FoodContext.Provider>
  );
};

function useFood(): FoodContextData {
  const context = useContext(FoodContext);

  return context;
}

export { FoodProvider, useFood };
