import { HttpClient } from "../adapters/AxiosHttpClientAdapter";

import { IRequest, IResponse } from "../interfaces/HttpInterface";

interface IAuthenticationGateway {
  login: (request: IRequest) => Promise<IResponse>;
  logout: (request: IRequest) => Promise<void>;
  validateToken: (request: IRequest) => Promise<IResponse>;
}

export class AuthenticationGateway implements IAuthenticationGateway {
  constructor(readonly httpClient: HttpClient) {}

  async register(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: "api/register",
      headers: request.headers,
      body: request.body,
    });
  }

  async login(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: "api/login",
      headers: request.headers,
      body: request.body,
    });
  }

  async logout(): Promise<void> {
    return await this.httpClient.request({
      method: "post",
      url: "api/logout",
    });
  }

  async validateToken(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: "api/user",
      headers: request.headers,
    });
  }
}
