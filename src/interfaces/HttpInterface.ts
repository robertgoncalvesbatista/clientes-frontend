export interface IResponse {
  body: any;
  status: number;
  statusText: string;
}

export interface IRequest {
  headers?: any;
  body?: any;
  id?: string;
}
