import { PropertyValidation, PropertyValidationParams } from '../../protocols';

export class CompareValidator implements PropertyValidation {
  constructor(private readonly fieldNameToCompare: string) {}

  validate({ fieldName, input }: PropertyValidationParams): string {
    const value = input[fieldName];
    const valueToCompare = input[this.fieldNameToCompare];
    if (value !== valueToCompare) {
      return "Values aren't equal.";
    }
  }
}
