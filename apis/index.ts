import axios, { AxiosRequestConfig } from "axios";

const API_URL = "http://localhost:3001/api";

type BaseConfig = Partial<AxiosRequestConfig>;

interface APIOption<k = {}> {
  endPoint: string;
  config?: BaseConfig;
  params?: any;
  body?: k;
  returnRaw?: boolean;
}

enum APIMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

export abstract class BaseAPI {
  abstract URL: string;

  private getURL(endPoint: string) {
    return API_URL + this.URL + endPoint;
  }

  private async getConfigs(config?: BaseConfig) {
    // const uidToken = await AsyncStorage.getItem("uidToken");
    // const BASE_CONFIG: BaseConfig = {
    //   headers: { Authorization: `Bearer ${uidToken}` },
    // };
    return { ...config };
  }

  private async methodFactory<T, K = {}>(
    method: APIMethod,
    option: APIOption<K>
  ): Promise<T> {
    const { endPoint, config, body, params } = option;
    const URL = this.getURL(endPoint);
    const CONFIG = await this.getConfigs({ ...config, params });
    const needBodyMethod =
      method === APIMethod.POST ||
      method === APIMethod.PUT ||
      method === APIMethod.PATCH;

    try {
      const { data } = needBodyMethod
        ? await axios[method]<T>(URL, body, CONFIG)
        : await axios[method]<T>(URL, CONFIG);
      return data;
    } catch (error) {
      throw new Error(`API Error: ${(error as any).message}`);
    }
  }

  protected async get<T>(option: APIOption) {
    return this.methodFactory<T>(APIMethod.GET, option);
  }

  protected async post<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.POST, option);
  }

  protected async put<T, K = {}>(option: APIOption<K>) {
    return this.methodFactory<T, K>(APIMethod.PUT, option);
  }
}
