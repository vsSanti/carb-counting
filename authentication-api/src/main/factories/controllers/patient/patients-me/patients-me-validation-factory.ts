import {
  GenericObjectValidator,
  GenericPropertyBuilder,
  ObjectValidator,
  StringValidator,
} from 'validations';

export const makePatientsMeValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const patientIdProperty = new GenericPropertyBuilder('patientId', [stringValidator]);

  const objectValidator = new GenericObjectValidator([patientIdProperty]);

  return objectValidator;
};
