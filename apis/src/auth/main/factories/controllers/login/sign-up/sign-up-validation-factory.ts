import { GenericObjectValidator, GenericPropertyBuilder } from '@/common/validation/builders';
import { ObjectValidator } from '@/common/validation/protocols';
import {
  CompareValidator,
  DateValidator,
  EmailValidator,
  EnumValidator,
  NumberValidator,
  StringValidator,
} from '@/common/validation/validators';

export const makeSignUpValidation = (): ObjectValidator => {
  const emailValidator = new EmailValidator();
  const stringValidator = new StringValidator();
  const numberValidator = new NumberValidator();
  const dateValidator = new DateValidator();

  const emailProperty = new GenericPropertyBuilder('email', [stringValidator, emailValidator]);
  const nameProperty = new GenericPropertyBuilder('name', [stringValidator]);
  const passwordProperty = new GenericPropertyBuilder('password', [stringValidator]);
  const passwordConfirmationProperty = new GenericPropertyBuilder('passwordConfirmation', [
    new CompareValidator('password'),
  ]);
  const sexProperty = new GenericPropertyBuilder('sex', [
    stringValidator,
    new EnumValidator(['masculine', 'feminine']),
  ]);
  const heightProperty = new GenericPropertyBuilder('height', [numberValidator]);
  const glycemicTargetProperty = new GenericPropertyBuilder('glycemicTarget', [numberValidator]);
  const weightProperty = new GenericPropertyBuilder('weight', [numberValidator]);
  const birthDateProperty = new GenericPropertyBuilder('birthDate', [dateValidator]);

  const objectValidator = new GenericObjectValidator([
    emailProperty,
    nameProperty,
    passwordProperty,
    passwordConfirmationProperty,
    sexProperty,
    heightProperty,
    glycemicTargetProperty,
    weightProperty,
    birthDateProperty,
  ]);

  return objectValidator;
};
