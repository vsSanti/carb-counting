import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { makeSignUpValidation } from '@/main/factories/controllers/login/signup/signup-validation-factory';
import {
  EmailValidator,
  EnumValidator,
  StringValidator,
} from '@/validation/validators/string-validators';
import { CompareValidator } from '@/validation/validators/general-validators';
import { NumberValidator } from '@/validation/validators/number-validators';
import { DateValidator } from '@/validation/validators/date-validators';

jest.mock('@/validation/builders/generic-object-validator');

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
