export type BodyType = {
  errorMessage?: string;
  error?: Error;
  data?: any;
  docs?: any[];
  count?: number;
  validationErrors?: {
    [key: string]: string[];
  };
};

export type HttpResponse = {
  statusCode: number;
  body: BodyType;
  [key: string]: any;
};

export type HttpRequest = {
  body?: any;
  patientId?: string;
  [key: string]: any;
};
