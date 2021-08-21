export type HttpResponse = {
  statusCode: number;
  body: {
    errorMessage?: string;
    error?: Error;
    data?: any;
  };
  [key: string]: any;
};

export type HttpRequest = {
  body?: any;
  patientId?: string;
  [key: string]: any;
};