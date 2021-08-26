import { makeLoginValidation } from '@/auth/main/factories/controllers/login/login/login-validation-factory';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/common/validation/builders';
import { EmailValidator, StringValidator } from '@/common/validation/validators';

jest.mock('@/common/validation/builders/generic-object-validator');

describe('LoginValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeLoginValidation();

    const emailValidator = new EmailValidator();
    const stringValidator = new StringValidator();

    const emailProperty = new GenericPropertyBuilder('email', [stringValidator, emailValidator]);
    const passwordProperty = new GenericPropertyBuilder('password', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([emailProperty, passwordProperty]);
  });
});
