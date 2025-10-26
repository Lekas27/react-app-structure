import axios, {
  AxiosError,
  HttpStatusCode,
  type AxiosRequestConfig,
} from "axios";

import type { ApiErrorResponseRecord } from "./types/errors";

export type Signal = AxiosRequestConfig["signal"];

export type ApiResponse<T> = T | AxiosError<unknown, unknown>;

const baseUrl = import.meta.env.PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: false,
});

export const callApi = async <Success, ErrorShape = ApiErrorResponseRecord>(
  config: AxiosRequestConfig
): Promise<Success> => {
  try {
    const { data } = await axiosInstance.request<Success>(config);

    return data;
  } catch (error: unknown) {
    // Normalize anything Axios might throw
    const axiosErr = error as AxiosError<ErrorShape>;

    throw axiosErr;
  }
};

// Set authorization header if token exists
axiosInstance.interceptors.request.use((config) => {
  // Get token from localStorage
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    // Handle specific status codes
    switch (status) {
      case HttpStatusCode.Unauthorized: {
        // Clear token from localStorage and redirect to main app
        localStorage.removeItem("accessToken");
        // Redirect to main frontend root (same domain)
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }

        return Promise.reject(
          new Error("Authentication failed. Redirecting to login.")
        );
      }

      case HttpStatusCode.Forbidden:
        // 403 will be handled by components
        break;

      case HttpStatusCode.InternalServerError:
        // Add specific handling for 500 when needed
        break;

      default:
        // All other errors pass through unchanged
        break;
    }

    return Promise.reject(error);
  }
);
