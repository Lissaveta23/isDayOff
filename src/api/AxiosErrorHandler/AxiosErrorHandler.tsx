import { PropsWithChildren, useEffect } from "react";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const AxiosErrorHandler = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        return request;
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return error;
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <>{children}</>;
};
