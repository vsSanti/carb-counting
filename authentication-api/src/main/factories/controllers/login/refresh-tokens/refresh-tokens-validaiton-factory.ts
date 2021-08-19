import { ObjectValidator } from '@/presentation/protocols';
import { GenericObjectValidator, GenericPropertyBuilder } from '@/validation/builders';
import { StringValidator } from '@/validation/validators/string-validators';

export const makeRefreshTokensValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

  const objectValidator = new GenericObjectValidator([refreshTokenProperty]);

  return objectValidator;
};
