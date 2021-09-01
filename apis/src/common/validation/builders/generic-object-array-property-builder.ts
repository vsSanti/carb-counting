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

    params.input[this.fieldName].forEach((element, i) => {
      const objErrors = this.schemaValidation.validate(element);

      if (objErrors.hasErrors) {
        const allObjectErrors = Object.keys(objErrors.errors).map(
          (key) => `[${i}]:[${key}]: ${objErrors.errors[key]}`
        );

        errors.push(...allObjectErrors);
      }
    });
    return errors;
  }
}
