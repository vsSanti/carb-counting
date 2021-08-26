import { GenericObjectValidator, GenericPropertyBuilder } from '@/common/validation/builders';
import { ObjectValidator } from '@/common/validation/protocols';
import { EmailValidator, StringValidator } from '@/common/validation/validators';

export const makeLoginValidation = (): ObjectValidator => {
  const emailValidator = new EmailValidator();
  const stringValidator = new StringValidator();

  const emailProperty = new GenericPropertyBuilder('email', [stringValidator, emailValidator]);
  const passwordProperty = new GenericPropertyBuilder('password', [stringValidator]);

  const objectValidator = new GenericObjectValidator([emailProperty, passwordProperty]);

  return objectValidator;
};
