import { makeRefreshTokensValidation } from '@/auth/main/factories/controllers/login/refresh-tokens/refresh-tokens-validaiton-factory';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/common/validation/builders';
import { StringValidator } from '@/common/validation/validators';

jest.mock('@/common/validation/builders/generic-object-validator');

describe('RefreshTokensValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeRefreshTokensValidation();

    const stringValidator = new StringValidator();

    const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([refreshTokenProperty]);
  });
});
