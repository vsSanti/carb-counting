export type HttpResponse = {
  statusCode: number;
  body: {
    errorMessage?: string;
  };
};

export type HttpRequest = {
  body?: any;
};
