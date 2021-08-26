import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

export class StringValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    if (typeof value !== 'string') {
      return "It isn't a string.";
    }
  }
}
