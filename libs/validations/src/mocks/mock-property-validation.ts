import { PropertyValidation, PropertyValidationParams } from '../../src';

export class PropertyValidationSpy implements PropertyValidation {
  error: string;
  params: any;

  validate(params: PropertyValidationParams): string {
    this.params = params;
    return this.error;
  }
}
