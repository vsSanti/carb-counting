import { PropertyValidation, PropertyValidationParams } from '../../protocols';

export class DateValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    if (isNaN(Date.parse(value))) {
      return "It isn't a date.";
    }
  }
}
