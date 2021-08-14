import {
  PropertyValidation,
  PropertyBuilder,
  PropertyBuilderParams,
} from '@/presentation/protocols';

export class GenericPropertyBuilder implements PropertyBuilder {
  constructor(private readonly validations: PropertyValidation[]) {}

  validate(params: PropertyBuilderParams): string[] {
    const errors: string[] = [];
    for (const validation of this.validations) {
      const error = validation.validate(params);
      if (error) {
        errors.push(error);
      }
    }
    return errors;
  }
}
