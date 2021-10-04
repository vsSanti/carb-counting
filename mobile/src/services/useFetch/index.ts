import { AxiosResponse } from 'axios';
import { useState, useCallback, useMemo } from 'react';
import { Alert } from 'react-native';

import { api } from '../api';
import { DataProps, RequestParams, UseFetchResponse } from './types';

interface UseFetchProps {
  apiType: 'auth' | 'meal';
}

const useFetch = <T>({ apiType }: UseFetchProps): UseFetchResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<DataProps<T> | undefined>(undefined);
  const [error, setError] = useState(undefined);

  const baseURL = useMemo(() => {
    let url: string;
    switch (apiType) {
      case 'auth':
        url = process.env.AUTH_BASE_URL || '';
        break;
      case 'meal':
        url = process.env.MEAL_BASE_URL || '';
        break;
      default:
        throw new Error('"baseURL" must be passed.');
    }

    return url;
  }, [apiType]);

  const clearData = useCallback(() => {
    setResponse(undefined);
  }, []);

  const callAPI = useCallback(
    async (
      { url, config, payload, options }: RequestParams,
      type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    ): Promise<DataProps<T>> => {
      try {
        const { clearData: clearDataParam } = options || {};

        if (clearDataParam) clearData();
        setError(undefined);
        setLoading(true);

        const fullURL = `${baseURL}${url}`;

        let callResponse: AxiosResponse<any> | undefined;
        switch (type) {
          case 'GET':
            callResponse = await api.get(fullURL, config);
            break;
          case 'POST':
            callResponse = await api.post(fullURL, payload, config);
            break;
          case 'PUT':
            callResponse = await api.put(fullURL, payload, config);
            break;
          case 'PATCH':
            callResponse = await api.patch(fullURL, payload, config);
            break;
          case 'DELETE':
            callResponse = await api.delete(fullURL, config);
            break;
          default:
            callResponse = undefined;
            break;
        }

        setResponse(callResponse?.data);

        return Promise.resolve(callResponse?.data);
      } catch (err) {
        const { showMessage = false } = options || {};
        const standardErrorMessage = 'Houve um erro ao buscar os dados.';

        setError(err?.response?.data?.message || standardErrorMessage);

        if (showMessage) {
          const msg = err?.response?.data?.message || standardErrorMessage;
          Alert.alert(msg);
        }

        return Promise.reject(err);
      } finally {
        setLoading(false);
      }
    },
    [clearData, baseURL] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const get = useCallback(
    async (params: RequestParams): Promise<DataProps<T>> => {
      const callResponse = await callAPI(params, 'GET');

      return Promise.resolve(callResponse);
    },
    [callAPI] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const post = useCallback(
    async (params: RequestParams): Promise<DataProps<T>> => {
      const callResponse = await callAPI(params, 'POST');

      return Promise.resolve(callResponse);
    },
    [callAPI] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const put = useCallback(
    async (params: RequestParams): Promise<DataProps<T>> => {
      const callResponse = await callAPI(params, 'PUT');

      return Promise.resolve(callResponse);
    },
    [callAPI] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const patch = useCallback(
    async (params: RequestParams): Promise<DataProps<T>> => {
      const callResponse = await callAPI(params, 'PATCH');

      return Promise.resolve(callResponse);
    },
    [callAPI] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const del = useCallback(
    async (params: RequestParams): Promise<DataProps<T>> => {
      const callResponse = await callAPI(params, 'DELETE');

      return Promise.resolve(callResponse);
    },
    [callAPI] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return {
    response,
    error,
    loading,
    clearData,
    get,
    post,
    put,
    patch,
    del,
  };
};

export { useFetch };
