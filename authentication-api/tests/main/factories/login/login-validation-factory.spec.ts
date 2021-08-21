import { makeLoginValidation } from '@/main/factories/controllers/login/login/login-validation-factory';
import {
  EmailValidator,
  GenericObjectValidator,
  GenericPropertyBuilder,
  StringValidator,
} from 'validations';

jest.mock('../../../../node_modules/validations/dist/builders/generic-object-validator');

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
