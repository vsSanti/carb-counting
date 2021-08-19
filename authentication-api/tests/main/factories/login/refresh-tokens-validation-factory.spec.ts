import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { makeRefreshTokensValidation } from '@/main/factories/controllers/login/refresh-tokens/refresh-tokens-validaiton-factory';
import { StringValidator } from '@/validation/validators/string-validators';

jest.mock('@/validation/builders/generic-object-validator');

describe('RefreshTokensValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeRefreshTokensValidation();

    const stringValidator = new StringValidator();

    const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([refreshTokenProperty]);
  });
});
