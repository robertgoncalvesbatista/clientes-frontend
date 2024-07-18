import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";

export interface HttpRequest {
  url: string;
  method: "get" | "post" | "put" | "delete";
  headers?: AxiosRequestHeaders;
  body?: any;
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<R>;
}

export class AxiosHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    const axiosResponse = await axios.request({
      url: data.url,
      method: data.method,
      headers: data.headers,
      data: data.body,
    });

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export const httpClientFactory = () => new AxiosHttpClientAdapter();
