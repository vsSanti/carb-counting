export type PropertyBuilderParams = {
  input: any;
};

export interface PropertyBuilder {
  validate: (params: PropertyBuilderParams) => string[];
}
