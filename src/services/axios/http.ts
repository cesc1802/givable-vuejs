import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

export type ResponseError = string | number | Record<string, unknown> | null;

interface ICommonResponse {
  success: boolean;
  status?: number;
  error?: ResponseError;
  errorMessage?: string;
  headers?: AxiosResponse["headers"];
}

export interface IResponse<T> extends ICommonResponse {
  data: T;
}

export class HttpError extends Error {
  status?: number;
  errorData?: ResponseError;
  headers?: AxiosResponse["headers"];

  constructor(
    message: string,
    status?: number,
    errorData?: ResponseError,
    headers?: AxiosResponse["headers"]
  ) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.errorData = errorData;
    this.headers = headers;
  }
}

const transformResponse = <T>(response: AxiosResponse): IResponse<T> => ({
  data: response.data as T,
  status: response.status,
  success: true,
  headers: response.headers,
});

const transformErrorResponse = <D>(
  error: AxiosError<unknown, D>
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
  return {
    data: null,
    success: false,
    status: error.response.status,
    error: error.response.data as ResponseError,
    errorMessage: error.response.statusText,
    headers: error.response.headers,
  };
};

class HttpClient {
  constructor(private client = axiosInstance) {}

  private async request<T, D>(config: AxiosRequestConfig): Promise<T> {
    try {
      const result = await this.client.request(config);
      const response = transformResponse<T>(result);
      return this.handleResponse(response);
    } catch (error) {
      const response = transformErrorResponse<D>(
        error as AxiosError<unknown, D>
      );
      return this.handleResponse(response) as unknown as T;
    }
  }

  private handleResponse<T>(response: IResponse<T>): T {
    if (response.success && response.data !== null) {
      return response.data;
    }
    const message =
      response.errorMessage ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (response.error && (response.error as any)?.message) ||
      "Something went wrong!";
    throw new HttpError(
      message,
      response.status,
      response.error,
      response.headers
    );
  }

  async get<T, D>(url: string, config?: AxiosRequestConfig) {
    return this.request<T, D>({ method: "get", url, ...config });
  }

  async post<T, D>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T, D>({ method: "post", url, data, ...config });
  }

  async patch<T, D>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T, D>({ method: "patch", url, data, ...config });
  }

  async put<T, D>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T, D>({ method: "put", url, data, ...config });
  }

  async delete<T, D>(url: string, config?: AxiosRequestConfig) {
    return this.request<T, D>({ method: "delete", url, ...config });
  }
}

const httpClient = new HttpClient();
export default httpClient;
