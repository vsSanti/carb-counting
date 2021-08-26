import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { ObjectValidator } from '@/validation/protocols';
import { StringValidator } from '@/validation/validators';

export const makeRefreshTokensValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

  const objectValidator = new GenericObjectValidator([refreshTokenProperty]);

  return objectValidator;
};
