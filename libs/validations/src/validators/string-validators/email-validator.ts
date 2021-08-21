import { PropertyValidation, PropertyValidationParams } from '../../protocols';

export class EmailValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    // eslint-disable-next-line no-useless-escape
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(value).toLowerCase())) {
      return "It isn't a valid email.";
    }
  }
}
