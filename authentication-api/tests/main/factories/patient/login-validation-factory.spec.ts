import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { makePatientsMeValidation } from '@/main/factories/controllers/patient/patients-me/patients-me-validation-factory';
import { StringValidator } from '@/validation/validators/string-validators';

jest.mock('@/validation/builders/generic-object-validator');

describe('LoginValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makePatientsMeValidation();

    const stringValidator = new StringValidator();

    const patientIdProperty = new GenericPropertyBuilder('patientId', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([patientIdProperty]);
  });
});
