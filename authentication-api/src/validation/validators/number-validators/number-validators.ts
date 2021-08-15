import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class NumberValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    return "It isn't a number.";
  }
}
