import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class DateValidator implements PropertyValidation {
  validate({ fieldName, input }: PropertyValidationParams): string {
    return undefined;
  }
}
