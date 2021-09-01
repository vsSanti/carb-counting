import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

type ArrayValidatorOptions = {
  validLength?: boolean;
};

export class ArrayValidator implements PropertyValidation {
  constructor(private readonly options?: ArrayValidatorOptions) {}

  validate({ fieldName, input }: PropertyValidationParams): string {
    const values = input[fieldName];

    if (!Array.isArray(values)) {
      return "It isn't an array.";
    }

    if (!this.options) return;

    const { validLength = true } = this.options;
    if (validLength && !values.length) return 'Array must contain at least one record.';
  }
}
