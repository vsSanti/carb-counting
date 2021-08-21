import {
  GenericObjectValidator,
  GenericPropertyBuilder,
  ObjectValidator,
  StringValidator,
} from 'validations';

export const makeRefreshTokensValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

  const objectValidator = new GenericObjectValidator([refreshTokenProperty]);

  return objectValidator;
};
