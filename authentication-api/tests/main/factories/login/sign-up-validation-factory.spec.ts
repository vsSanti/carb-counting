import {
  CompareValidator,
  DateValidator,
  EmailValidator,
  EnumValidator,
  GenericObjectValidator,
  GenericPropertyBuilder,
  NumberValidator,
  StringValidator,
} from 'validations';

import { makeSignUpValidation } from '@/main/factories/controllers/login/sign-up/sign-up-validation-factory';

jest.mock('../../../../node_modules/validations/dist/builders/generic-object-validator');

describe('SignUpValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeSignUpValidation();

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

    expect(GenericObjectValidator).toHaveBeenCalledWith([
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
  });
});
