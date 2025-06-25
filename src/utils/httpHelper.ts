import { HttpResponse } from "../models/httpResponse";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const notFound = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: message ?? "Resource not found.",
  };
};
