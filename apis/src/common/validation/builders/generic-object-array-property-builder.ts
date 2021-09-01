import {
  PropertyValidation,
  PropertyBuilder,
  PropertyBuilderParams,
} from '@/common/validation/protocols';

export class GenericObjectArrayPropertyBuilder implements PropertyBuilder {
  constructor(
    public readonly fieldName: string,
    private readonly arrayValidation: PropertyValidation
  ) {}

  validate(params: PropertyBuilderParams): string[] {
    const errors: string[] = [];

    const arrayValidationError = this.arrayValidation.validate({
      fieldName: this.fieldName,
      input: params.input,
    });

    if (arrayValidationError) return [arrayValidationError];

    return errors;
  }
}
