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
      const objErrors = this.schemaValidation.validate({ input: element });

      if (objErrors.hasErrors) {
        const allObjectErrors = Object.keys(objErrors.errors)
          .map((key) => objErrors.errors[key].length && `[${i}]:[${key}]: ${objErrors.errors[key]}`)
          .filter((msg) => msg);

        errors.push(...allObjectErrors);
      }
    });
    return errors;
  }
}
