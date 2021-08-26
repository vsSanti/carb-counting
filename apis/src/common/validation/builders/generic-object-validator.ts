import {
  ObjectValidator,
  ObjectValidatorParams,
  ObjectValidatorReturn,
  PropertyBuilder,
} from '@/common/validation/protocols';

export class GenericObjectValidator implements ObjectValidator {
  constructor(private readonly propertyBuilders: PropertyBuilder[]) {}

  private hasErrors(errors: any): boolean {
    const keys = Object.keys(errors);
    for (const key of keys) {
      if (errors[key].length) return true;
    }
    return false;
  }

  validate(params: ObjectValidatorParams): ObjectValidatorReturn {
    const errors = {};
    for (const propertyBuilder of this.propertyBuilders) {
      const errorsArray = propertyBuilder.validate(params);
      errors[propertyBuilder.fieldName] = errorsArray;
    }

    const hasErrors = this.hasErrors(errors);

    return {
      errors,
      hasErrors,
    };
  }
}
