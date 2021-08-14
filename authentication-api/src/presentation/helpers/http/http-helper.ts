/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpResponse } from '@/presentation/protocols';

export const badRequest = (data: any): HttpResponse => {
  return {
    statusCode: 400,
    body: data,
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
