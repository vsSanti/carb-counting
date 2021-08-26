import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

export class EnumValidator implements PropertyValidation {
  constructor(private readonly allowedValues: string[]) {}

  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    if (!this.allowedValues.includes(value)) {
      return `It isn't a valid value. Allowed values: ${this.allowedValues.join(', ')}.`;
    }
  }
}
