import { HttpClient } from "../adapters/AxiosHttpClientAdapter";

import { IRequest, IResponse } from "../interfaces/HttpInterface";

interface IAuthenticationGateway {
  login: (request: IRequest) => Promise<IResponse>;
  logout: (request: IRequest) => Promise<void>;
  validateToken: (request: IRequest) => Promise<IResponse>;
}

export class AuthenticationGateway implements IAuthenticationGateway {
  constructor(readonly httpClient: HttpClient) {}

  async login(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: import.meta.env.VITE_API_URL + "api/login",
      headers: request.headers,
      body: request.body,
    });
  }

  async logout(): Promise<void> {
    return await this.httpClient.request({
      method: "post",
      url: import.meta.env.VITE_API_URL + "api/logout",
    });
  }

  async validateToken(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "get",
      url: import.meta.env.VITE_API_URL + "api/user",
      headers: request.headers,
    });
  }
}
