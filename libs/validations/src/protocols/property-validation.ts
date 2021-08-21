export type PropertyValidationParams = {
  input: any;
  fieldName: string;
};

export interface PropertyValidation {
  validate: (params: PropertyValidationParams) => string;
}
