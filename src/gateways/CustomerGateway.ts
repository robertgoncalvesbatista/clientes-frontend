import { HttpClient } from "../adapters/AxiosHttpClientAdapter";

import { IRequest, IResponse } from "../interfaces/HttpInterface";

interface ICustomerGateway {
  index: () => Promise<IResponse>;
  store: (request: IRequest) => Promise<IResponse>;
  show: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
  destroy: (request: IRequest) => Promise<IResponse>;
}

export class CustomerGateway implements ICustomerGateway {
  constructor(readonly httpClient: HttpClient) {}

  async index(request?: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: "api/customer",
      headers: request?.headers,
      params: request?.params,
    });
  }

  async store(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: "api/customers/create",
      headers: request.headers,
    });
  }

  async show(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: `api/customers/read/${request.id}`,
      headers: request.headers,
    });
  }

  async update(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "put",
      url: `api/customers/update/${request.id}`,
      headers: request.headers,
    });
  }

  async destroy(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "delete",
      url: `api/customers/destroy/${request.id}`,
      headers: request.headers,
    });
  }
}
