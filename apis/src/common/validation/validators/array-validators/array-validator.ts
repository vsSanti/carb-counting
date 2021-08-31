import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

export class ArrayValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    const values = input[fieldName];

    if (!Array.isArray(values)) {
      return "It isn't an array.";
    }
  }
}
