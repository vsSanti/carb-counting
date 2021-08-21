export type ObjectValidatorReturn = {
  errors?: {
    [key: string]: string[];
  };
  hasErrors: boolean;
};

export type ObjectValidatorParams = {
  input: any;
};

export interface ObjectValidator {
  validate: (params: ObjectValidatorParams) => ObjectValidatorReturn;
}
