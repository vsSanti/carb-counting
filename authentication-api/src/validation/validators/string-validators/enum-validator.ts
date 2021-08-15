import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class EnumValidator implements PropertyValidation {
  constructor(private readonly allowedValues: string[]) {}

  validate({ fieldName, input }: PropertyValidationParams): string {
    return `It isn't a valid value. Allowed values: ${this.allowedValues.join(', ')}.`;
  }
}
