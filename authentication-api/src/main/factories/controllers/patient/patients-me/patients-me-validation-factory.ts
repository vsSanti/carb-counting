import { ObjectValidator } from '@/presentation/protocols';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { StringValidator } from '@/validation/validators/string-validators';

export const makePatientsMeValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const patientIdProperty = new GenericPropertyBuilder('patientId', [stringValidator]);

  const objectValidator = new GenericObjectValidator([patientIdProperty]);

  return objectValidator;
};
