import { useMemo } from "react";
import { useHTTP } from "./useHTTP";
import { AxiosRequestHeaders } from "axios";
import { IUser } from "../models";

const API_URL: string = import.meta.env.VITE_BASE_URL!;

interface IApiConfig {
  loader?: boolean | string;
  debug?: boolean;
}

interface IApiAccountGetConfig extends IApiConfig {}

export interface IUseApi {
  account: {
    get: (config: IApiAccountGetConfig) => Promise<IUser>;
  };
}

type TUseApi = () => IUseApi;

export const useApi: TUseApi = (): IUseApi => {
  const http = useHTTP();

  const headers: AxiosRequestHeaders = useMemo<AxiosRequestHeaders>(() => {
    const _headers: any = {};

    _headers["Access-Control-Allow-Origin"] = "*";
    _headers["Content-Type"] = "application/json";

    return _headers;
  }, []);

  return {
    account: {
      get: ({ loader }) => {
        return http.request<IUser>({
          method: "GET",
          url: `${API_URL}/account`,
          headers,
          loader: !!loader ? loader : "Loading users...",
        });
      },
    },
  };
};
