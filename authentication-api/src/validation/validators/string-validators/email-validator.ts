import { PropertyValidation, PropertyValidationParams } from '@/presentation/protocols';

export class EmailValidator implements PropertyValidation {
  validate(params: PropertyValidationParams): string {
    return;
  }
}
