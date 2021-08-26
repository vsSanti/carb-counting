import { PropertyBuilder, PropertyBuilderParams } from '@/common/validation/protocols';

export class PropertyBuilderSpy implements PropertyBuilder {
  errors: string[] = [];
  params: PropertyBuilderParams;

  constructor(public readonly fieldName: string) {}

  validate(params: PropertyBuilderParams): string[] {
    this.params = params;
    return this.errors;
  }
}
