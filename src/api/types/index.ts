export * from './common';

export type ResponseType = UniNamespace.RequestOptions['responseType'];

export interface CustomRequestConfig
  extends Omit<UniNamespace.RequestOptions, 'url'> {
  baseURL?: string;
  url?: string;
  urlDict?: string;
}

export type CustomRequestHeader = UniNamespace.RequestOptions['header'] &
  Partial<{
    token: string;
    'x-language': string;
    showLoading: boolean;
  }>;

export interface CustomResponse<T = any> {
  readonly status: boolean;
  readonly message: string;
  data: T;
  response: UniNamespace.RequestSuccessCallbackResult;
}
