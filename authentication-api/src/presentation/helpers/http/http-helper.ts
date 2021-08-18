/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ServerError, UnauthorizedError } from '@/presentation/errors';
import { HttpResponse } from '@/presentation/protocols';

export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: data,
  };
};

export const badRequest = (data: any): HttpResponse => {
  return {
    statusCode: 400,
    body: data,
  };
};

export const unauthorized = (): HttpResponse => {
  return {
    statusCode: 401,
    body: {
      errorMessage: new UnauthorizedError().message,
    },
  };
};

export const conflict = (error: Error): HttpResponse => {
  return {
    statusCode: 409,
    body: {
      errorMessage: error.message,
    },
  };
};

export const serverError = (error: Error): HttpResponse => {
  const err = new ServerError(error.stack);
  return {
    statusCode: 500,
    body: {
      errorMessage: err.message,
      error: err,
    },
  };
};
