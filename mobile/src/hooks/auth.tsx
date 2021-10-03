/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as SecureStore from 'expo-secure-store';

import { api, useFetch } from '@/services';

interface LoginCredentials {
  email: string;
  password: string;
}

interface Credentials {
  accessToken: string;
  refreshToken: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextData {
  user?: User;
  loadingCredentials: boolean;
  loadingUser: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [credentials, setCredentials] = useState<Credentials>();

  const { post: postLogin, loading: loadingCredentials } = useFetch<Credentials>({
    baseURL: 'auth',
  });

  const { get: getUser, loading: loadingUser } = useFetch<User>({
    baseURL: 'auth',
  });

  const login = useCallback(
    async ({ email, password }: LoginCredentials) => {
      try {
        const response = await postLogin({
          url: '/login',
          payload: { email, password },
        });

        await Promise.all([
          SecureStore.setItemAsync('accessToken', response.data?.accessToken || ''),
          SecureStore.setItemAsync('refreshToken', response.data?.refreshToken || ''),
        ]);

        setCredentials(response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    [postLogin]
  );

  const logout = useCallback(async () => {
    await Promise.all([
      SecureStore.deleteItemAsync('accessToken'),
      SecureStore.deleteItemAsync('refreshToken'),
    ]);

    api!.defaults!.headers!.Authorization = '';

    setUser(undefined);
  }, []);

  const getLoggedUser = useCallback(async (): Promise<void> => {
    try {
      const response = await getUser({ url: '/patients/me' });

      setUser(response.data);
    } catch (err) {
      logout();
    }
  }, [getUser, logout]);

  useEffect(() => {
    if (!credentials) return;

    api!.defaults!.headers!.Authorization = `Bearer ${credentials.accessToken}`;

    getLoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [credentials]);

  useEffect(() => {
    const getCredentials = async () => {
      const [accessToken, refreshToken] = await Promise.all([
        SecureStore.getItemAsync('accessToken'),
        SecureStore.getItemAsync('refreshToken'),
      ]);

      if (!accessToken || !refreshToken) return;

      setCredentials({ accessToken, refreshToken });
    };

    if (credentials) return;

    getCredentials();
  }, [credentials]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingCredentials,
        loadingUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
