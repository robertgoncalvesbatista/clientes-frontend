import { AxiosRequestHeaders } from "axios";

export interface IResponse {
  data: any;
  status: number;
  statusText: string;
}

export interface IRequest {
  headers?: AxiosRequestHeaders;
  params?: Record<string, any>;
  body?: any;
  id?: string;
}
