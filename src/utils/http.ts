import { AxiosError } from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import axiosInstance from './axios';

export type ResponseError = string | number | Record<string, unknown> | null;

interface ICommonResponse {
  success: boolean;
  status?: number;
  error?: ResponseError;
  errorMessage?: string;
  headers?: AxiosResponse['headers'];
}

export interface IResponse<T> extends ICommonResponse {
  data: T;
}

const transformResponse = <T>(response: AxiosResponse): IResponse<T> => {
  return {
    data: response.data as T,
    status: response.status,
    success: true,
    headers: response.headers,
  };
};

const transformErrorResponse = <D>(
  error: AxiosError<null, D>
): IResponse<null> => {
  if (!error.response) {
    return {
      data: null,
      status: error.status,
      success: false,
      errorMessage: error.message,
      error: error.message,
    };
  }
  //   const isAuthFail = AuthUtils.isAuthFail(error.response.status);
  //   if (isAuthFail && window) {
  //     doLogout();
  //   }
  return {
    data: null,
    success: false,
    status: error.response.status,
    error: error.response.data,
    errorMessage: error.response.statusText,
    headers: error.response.headers,
  };
};

class Http {
  async get<T>(url: string, axiosConfig?: AxiosRequestConfig) {
    try {
      const result = await axiosInstance({
        method: 'get',
        url,
        ...axiosConfig,
      });
      return transformResponse<T>(result);
    } catch (error) {
      return transformErrorResponse<null>(error as AxiosError<null, null>);
    }
  }

  async post<T, D>(
    url: string,
    data?: unknown,
    axiosConfig?: AxiosRequestConfig
  ) {
    try {
      const result = await axiosInstance({
        method: 'post',
        url,
        data,
        ...axiosConfig,
      });
      return transformResponse<T>(result);
    } catch (error) {
      return transformErrorResponse<D>(error as AxiosError<null, D>);
    }
  }

  async patch<T, D>(
    url: string,
    data?: unknown,
    axiosConfig?: AxiosRequestConfig
  ) {
    try {
      const result = await axiosInstance({
        method: 'patch',
        url,
        data,
        ...axiosConfig,
      });
      return transformResponse<T>(result);
    } catch (error) {
      return transformErrorResponse<D>(error as AxiosError<null, D>);
    }
  }

  async put<T, D>(
    url: string,
    data?: unknown,
    axiosConfig?: AxiosRequestConfig
  ) {
    try {
      const result = await axiosInstance({
        method: 'put',
        url,
        data,
        ...axiosConfig,
      });
      return transformResponse<T>(result);
    } catch (error) {
      return transformErrorResponse<D>(error as AxiosError<null, D>);
    }
  }

  async delete<T, D>(url: string, axiosConfig?: AxiosRequestConfig) {
    try {
      const result = await axiosInstance({
        method: 'delete',
        url,
        ...axiosConfig,
      });
      return transformResponse<T>(result);
    } catch (error) {
      return transformErrorResponse<null>(error as AxiosError<null, null>);
    }
  }
}

const HttpFetcher = new Http();

export default HttpFetcher;
