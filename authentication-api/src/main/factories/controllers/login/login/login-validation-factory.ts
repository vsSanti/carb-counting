import { ObjectValidator } from '@/presentation/protocols';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { EmailValidator, StringValidator } from '@/validation/validators/string-validators';

export const makeLoginValidation = (): ObjectValidator => {
  const emailValidator = new EmailValidator();
  const stringValidator = new StringValidator();

  const emailProperty = new GenericPropertyBuilder('email', [stringValidator, emailValidator]);
  const passwordProperty = new GenericPropertyBuilder('password', [stringValidator]);

  const objectValidator = new GenericObjectValidator([emailProperty, passwordProperty]);

  return objectValidator;
};
