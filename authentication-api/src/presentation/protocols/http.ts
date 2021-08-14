export type HttpResponse = {
  statusCode: number;
  body: {
    errorMessage?: string;
    [key: string]: any;
  };
};

export type HttpRequest = {
  body?: any;
};
