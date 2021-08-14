export type ObjectValidatorReturn = {
  [key: string]: string[];
};

export type ObjectValidatorParams = {
  input: any;
};

export interface ObjectValidator {
  validate: (params: ObjectValidatorParams) => ObjectValidatorReturn;
}
