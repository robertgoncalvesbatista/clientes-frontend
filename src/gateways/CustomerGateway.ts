import { HttpClient } from "../adapters/AxiosHttpClientAdapter";

import { IRequest, IResponse } from "../interfaces/HttpInterface";

interface ICustomerGateway {
  index: (request: IRequest) => Promise<IResponse>;
  store: (request: IRequest) => Promise<IResponse>;
  show: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
  destroy: (request: IRequest) => Promise<IResponse>;
}

export class CustomerGateway implements ICustomerGateway {
  constructor(readonly httpClient: HttpClient) {}

  async index(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: import.meta.env.VITE_API_URL + "api/users/customers",
      headers: request.headers,
      body: request.body,
    });
  }

  async store(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: import.meta.env.VITE_API_URL + "api/customers/create",
      headers: request.headers,
    });
  }

  async show(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: import.meta.env.VITE_API_URL + `api/customers/read/${request.id}`,
      headers: request.headers,
    });
  }

  async update(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "put",
      url: import.meta.env.VITE_API_URL + `api/customers/update/${request.id}`,
      headers: request.headers,
    });
  }

  async destroy(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "delete",
      url: import.meta.env.VITE_API_URL + `api/customers/destroy/${request.id}`,
      headers: request.headers,
    });
  }
}
