import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

export class NumberValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    if (typeof value !== 'number') {
      return "It isn't a number.";
    }
  }
}
