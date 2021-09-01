import {
  PropertyValidation,
  PropertyBuilder,
  PropertyBuilderParams,
  ObjectValidator,
} from '@/common/validation/protocols';

export class GenericObjectArrayPropertyBuilder implements PropertyBuilder {
  constructor(
    public readonly fieldName: string,
    private readonly arrayValidation: PropertyValidation,
    private readonly schemaValidation: ObjectValidator
  ) {}

  validate(params: PropertyBuilderParams): string[] {
    const errors: string[] = [];

    const arrayValidationError = this.arrayValidation.validate({
      fieldName: this.fieldName,
      input: params.input,
    });

    if (arrayValidationError) return [arrayValidationError];

    for (const obj of params.input[this.fieldName]) {
      this.schemaValidation.validate(obj);
    }

    return errors;
  }
}
