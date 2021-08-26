import { makeRefreshTokensValidation } from '@/main/factories/controllers/auth/login/refresh-tokens/refresh-tokens-validaiton-factory';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { StringValidator } from '@/validation/validators';

jest.mock('@/validation/builders/generic-object-validator');

describe('RefreshTokensValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeRefreshTokensValidation();

    const stringValidator = new StringValidator();

    const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([refreshTokenProperty]);
  });
});
