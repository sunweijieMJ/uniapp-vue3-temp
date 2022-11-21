export * from './common';

export type ResponseType = UniNamespace.RequestOptions['responseType'];

export interface CustomRequestConfig
  extends Omit<UniNamespace.RequestOptions, 'url'> {
  baseURL?: string;
  url?: string;
  urlDict?: string;
}

export interface CustomResponseConfig<T = any> {
  readonly status: boolean;
  readonly message: string;
  data: T;
  response: UniNamespace.RequestSuccessCallbackResult;
}
