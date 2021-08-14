import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class CompareValidator implements PropertyValidation {
  constructor(private readonly fieldNameToCompare) {}

  validate({ fieldName, input }: PropertyValidationParams): string {
    return;
  }
}
