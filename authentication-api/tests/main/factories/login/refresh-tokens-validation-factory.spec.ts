import { GenericObjectValidator, GenericPropertyBuilder, StringValidator } from 'validations';

import { makeRefreshTokensValidation } from '@/main/factories/controllers/login/refresh-tokens/refresh-tokens-validaiton-factory';

jest.mock('../../../../node_modules/validations/dist/builders/generic-object-validator');

describe('RefreshTokensValidation Factory', () => {
  it('should call GenericObjectValidator with correct validations', () => {
    makeRefreshTokensValidation();

    const stringValidator = new StringValidator();

    const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

    expect(GenericObjectValidator).toHaveBeenCalledWith([refreshTokenProperty]);
  });
});
