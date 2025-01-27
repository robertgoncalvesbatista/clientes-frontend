import axios, { AxiosRequestHeaders } from "axios";

export interface HttpRequest {
  url: string;
  method: "get" | "post" | "put" | "delete";
  headers?: AxiosRequestHeaders;
  params?: Record<string, any>;
  body?: any;
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<R>;
}

const server = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

server.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export class AxiosHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    const axiosResponse = await server.request({
      url: data.url,
      method: data.method,
      headers: data.headers,
      params: data.params,
      data: data.body,
    });

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    };
  }
}

export const httpClientFactory = () => new AxiosHttpClientAdapter();
