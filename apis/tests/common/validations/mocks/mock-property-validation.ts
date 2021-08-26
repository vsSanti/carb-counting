import { PropertyValidation, PropertyValidationParams } from '@/common/validation/protocols';

export class PropertyValidationSpy implements PropertyValidation {
  error: string;
  params: any;

  validate(params: PropertyValidationParams): string {
    this.params = params;
    return this.error;
  }
}
