export type PropertyBuilderParams = {
  input: any;
};

export interface PropertyBuilder {
  fieldName: string;
  validate: (params: PropertyBuilderParams) => string[];
}
