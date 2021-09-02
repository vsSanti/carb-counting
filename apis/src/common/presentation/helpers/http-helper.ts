import { NotFoundError, ServerError, UnauthorizedError } from '@/common/presentation/errors';
import { HttpResponse, BodyType } from '@/common/presentation/protocols';

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

export const notFound = (param: string): HttpResponse => {
  return {
    statusCode: 404,
    body: {
      errorMessage: new NotFoundError(param).message,
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
