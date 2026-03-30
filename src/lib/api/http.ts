import axios, { type AxiosError, type AxiosRequestConfig, type Method } from "axios";
import type { ApiErrorBody, ApiSuccess } from "./types";
import { getAccessToken, getOrgExternalId } from "./auth-storage";

const rawBaseURL = String(process.env.NEXT_PUBLIC_API_BASE_URL || "").trim();

if (!rawBaseURL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL.");
}

export const baseURL = rawBaseURL.endsWith("/") ? rawBaseURL : `${rawBaseURL}/`;

export const http = axios.create({
  baseURL,
  withCredentials: true,
});

http.interceptors.request.use((cfg) => {
  cfg.headers = cfg.headers ?? {};
  const headers = cfg.headers as Record<string, string>;

  const token = getAccessToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const orgExternalId = getOrgExternalId();
  if (orgExternalId) {
    headers["X-Org-External-Id"] = orgExternalId;
  }

  return cfg;
});

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function extractApiError(error: AxiosError): ApiErrorBody {
  const payload = error.response?.data;

  if (isObject(payload)) {
    if (isObject(payload.error) && typeof payload.error.code === "string") {
      return payload.error as ApiErrorBody;
    }

    if (typeof payload.code === "string") {
      return payload as ApiErrorBody;
    }
  }

  return {
    code: "unexpected_error",
    message: error.message || "Unexpected error.",
    status: error.response?.status,
  };
}

export async function request<T>(
  url: string,
  method: Method,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiSuccess<T>> {
  try {
    const response = await http.request<ApiSuccess<T>>({
      url,
      method,
      ...(method.toUpperCase() === "GET" ? { params: data } : { data }),
      ...config,
    });

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw extractApiError(err);
    }

    throw {
      code: "unexpected_error",
      message: "Unexpected error.",
    } satisfies ApiErrorBody;
  }
}