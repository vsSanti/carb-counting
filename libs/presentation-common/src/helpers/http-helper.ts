import { ServerError, UnauthorizedError } from '..';
import { HttpResponse, BodyType } from '..';

export const ok = (data: BodyType): HttpResponse => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = (data: BodyType): HttpResponse => {
  return {
    statusCode: 201,
    body: data,
  };
};

export const badRequest = (data: BodyType): HttpResponse => {
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
