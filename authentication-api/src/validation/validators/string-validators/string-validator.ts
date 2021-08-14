import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class StringValidator implements PropertyValidation {
  validate(params: PropertyValidationParams): string {
    return;
  }
}
