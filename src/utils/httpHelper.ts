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
    body: { message: message ?? "Resource not found." },
  };
};

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "Successfully created",
    },
  };
};

export const badRequest = async (message?: String): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: {
      message: message ?? "Bad Request",
    },
  };
};
