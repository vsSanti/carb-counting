export type PropertyBuilderParams = {
  input: any;
  fieldName: string;
};

export interface PropertyBuilder {
  validate: (params: PropertyBuilderParams) => string[];
}
