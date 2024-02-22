/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { ProfileState, profileLoginAction, profileLogoutAction } from '@/store/profile.slice';
import { store, useAppSelector } from '@/store';
import { API_HOST } from '@/constants/api.constant';

interface IRequestState<T> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: AxiosError<T>;
  data?: T;
}

interface IRequestConfig extends AxiosRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

interface IUseRequest {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: AxiosError<any, any>;
  data?: any;
  makeRequest: (config: IRequestConfig) => Promise<AxiosResponse<any, any>>;
}

/**
 *
 * @param {object} options { useHost: ... } Options for the each request
 * @returns {IUseRequest}
 */
const useRequest = ({ useHost }: { useHost: boolean } = { useHost: false }): IUseRequest => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { accessToken: token, refreshToken: refresh } = useAppSelector((state) => state.profile) as ProfileState;
  //   const { enqueueSnackbar } = useSnackbar();

  const [source] = useState(axios.CancelToken.source());

  const [requestState, setRequestState] = useState<IRequestState<any>>({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  useEffect(
    () => () => {
      requestState.isLoading && source.cancel('This was cancelled!');
    },
    []
  );

  const logout = () => {
    dispatch(profileLogoutAction());
    window.location.reload();
  };

  const makeRequest = useCallback(
    async (config: IRequestConfig) => {
      setRequestState({ isLoading: true, isSuccess: false, isError: false });

      const axiosInstance = axios.create({
        baseURL: useHost ? `${location.origin}/api/` : API_HOST,
        headers: {
          common: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        },
        cancelToken: source.token,
        ...config,
      });

      const promise = new Promise<AxiosResponse | AxiosError>((res, rej) => {
        const refreshUser = async () => {
          try {
            const resolve = await axiosInstance.request({
              method: 'POST',
              url: '', // API.refresh,
              // data: { refresh },
              headers: {
                Authorization: `Bearer ${refresh}`,
              },
            });
            const { data }: any = resolve.data;
            const user = {
              ...data.user,
              accessToken: data.access,
              refreshToken: data.refresh,
            };
            dispatch(profileLoginAction(user));
            // retryRequest(config, user);
            window.location.reload();
          } catch (e) {
            dispatch(profileLogoutAction());
          }
        };

        const rejectErr = (error: AxiosError | any) => {
          setRequestState({
            isLoading: false,
            isSuccess: false,
            isError: true,
            error,
          });
          rej(error);
        };

        const retryRequest = (config: IRequestConfig, user: { accessToken: string; refreshToken: string }) => {
          axiosInstance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
          axiosInstance
            .request(config)
            .then((response) => {
              setRequestState({
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: response.data,
              });
              res(response);
            })
            .catch((err) => {
              rej(err);
            });
        };

        // eslint-disable-next-line consistent-return
        const request = async () => {
          try {
            const { accessToken: token, refreshToken: refresh } = store.getState().profile;
            axiosInstance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
            const response: AxiosResponse<any> = await axiosInstance.request(config);
            setRequestState({
              isLoading: false,
              isSuccess: true,
              isError: false,
              data: response.data,
            });

            res(response);
          } catch (error: AxiosError | any) {
            const { code } = error;
            const networkErrorCodes = ['ERR_CONNECTION_REFUSED', 'ERR_NETWORK'];
            // global error
            if (networkErrorCodes.includes(code))
              toast.error('Make sure you have a proper internet connection!', {
                duration: 5000,
              });

            if (!axios.isCancel(error)) {
              // reject returns catch
              if (!token) return rejectErr(error);

              // Authentication Checker...
              const authTokenErrors = [401, 403];
              const data = error?.response?.data;
              if (authTokenErrors.includes(error.response?.status) && data?.message === 'token is invalid or expired') {
                logout();
              }
              else {
                rejectErr(error);
              }
            }
          }
        };

        request();
      });

      return promise as unknown as Promise<AxiosResponse>;
    },
    [navigate, source]
  );

  return { makeRequest, ...requestState };
};

export default useRequest;
