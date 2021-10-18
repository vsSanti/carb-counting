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
import { DataProps } from '@/services/useFetch/types';

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
  birthDate: string;
  createdAt: string;
}

interface AuthContextData {
  user?: User;
  loadingCredentials: boolean;
  hasCredentials: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  setCredentials: React.Dispatch<React.SetStateAction<Credentials | undefined>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [credentials, setCredentials] = useState<Credentials>();

  const { post: postCredentials, loading: loadingCredentials } = useFetch<Credentials>({
    apiType: 'auth',
  });

  const { get: getUser } = useFetch<User>({ apiType: 'auth' });

  const logout = useCallback(async () => {
    await Promise.all([
      SecureStore.deleteItemAsync('accessToken'),
      SecureStore.deleteItemAsync('refreshToken'),
    ]);

    api!.defaults!.headers!.Authorization = '';

    setUser(undefined);
    setCredentials(undefined);
  }, []);

  const login = useCallback(
    async ({ email, password }: LoginCredentials) => {
      try {
        await logout();
        const response = await postCredentials({
          url: '/login',
          payload: { email, password },
        });

        setCredentials(response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    [logout, postCredentials]
  );

  const getLoggedUser = useCallback(async (): Promise<void> => {
    try {
      const response = await getUser({ url: '/patients/me' });

      setUser(response.data);
    } catch (err) {
      logout();
    }
  }, [getUser, logout]);

  const refreshTokens = useCallback(async (): Promise<DataProps<Credentials>> => {
    const token = await SecureStore.getItemAsync('refreshToken');

    return postCredentials({
      url: '/refresh',
      payload: { refreshToken: token },
    });
  }, [postCredentials]);

  useEffect(() => {
    if (!credentials?.accessToken && !credentials?.refreshToken) return;

    const setCredentialsToSecureStore = async () => {
      await Promise.all([
        SecureStore.setItemAsync('accessToken', credentials?.accessToken || ''),
        SecureStore.setItemAsync('refreshToken', credentials?.refreshToken || ''),
      ]);
    };

    setCredentialsToSecureStore();

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

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error?.response?.config?.url !== '/refresh' &&
          error?.response?.status === 401
        ) {
          return refreshTokens().then((response) => {
            const { accessToken = '', refreshToken = '' } = response.data || {};

            const config = { ...error?.config };
            config.headers.Authorization = `Bearer ${accessToken}`;

            setCredentials({
              accessToken,
              refreshToken,
            });

            return api.request(config);
          });
        }

        return Promise.reject(error);
      }
    );
  }, [credentials, refreshTokens]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingCredentials,
        hasCredentials: !!credentials,
        login,
        logout,
        setCredentials,
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
