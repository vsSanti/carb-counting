import { GenericObjectValidator, GenericPropertyBuilder, StringValidator } from 'validations';
import { makePatientsMeValidation } from '@/main/factories/controllers/patient/patients-me/patients-me-validation-factory';

jest.mock('../../../../node_modules/validations/dist/builders/generic-object-validator');

describe('LoginValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makePatientsMeValidation();

    const stringValidator = new StringValidator();

    const patientIdProperty = new GenericPropertyBuilder('patientId', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([patientIdProperty]);
  });
});
