import {
  PropertyValidation,
  PropertyBuilder,
  PropertyBuilderParams,
} from '@/presentation/protocols';

export class GenericPropertyBuilder implements PropertyBuilder {
  constructor(private readonly validations: PropertyValidation[]) {}

  validate(params: PropertyBuilderParams): string[] {
    for (const validation of this.validations) {
      validation.validate(params);
    }
    return [];
  }
}
