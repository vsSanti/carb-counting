export type HttpResponse = {
  statusCode: number;
  body: {
    errorMessage?: string;
    error?: Error;
    data?: any;
  };
};

export type HttpRequest = {
  body?: any;
  authorizationToken?: string;
};
