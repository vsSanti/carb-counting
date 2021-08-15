import { ObjectValidator } from '@/presentation/protocols';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { DateValidator } from '@/validation/validators/date-validators';
import { CompareValidator } from '@/validation/validators/general-validators';
import { NumberValidator } from '@/validation/validators/number-validators';
import {
  EmailValidator,
  EnumValidator,
  StringValidator,
} from '@/validation/validators/string-validators';

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
  const insulinUnitsPerDayProperty = new GenericPropertyBuilder('insulinUnitsPerDay', [
    numberValidator,
  ]);
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
    insulinUnitsPerDayProperty,
    weightProperty,
    birthDateProperty,
  ]);

  return objectValidator;
};
