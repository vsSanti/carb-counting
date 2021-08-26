import { GenericObjectValidator, GenericPropertyBuilder } from '@/common/validation/builders';
import { ObjectValidator } from '@/common/validation/protocols';
import { StringValidator } from '@/common/validation/validators';

export const makeRefreshTokensValidation = (): ObjectValidator => {
  const stringValidator = new StringValidator();

  const refreshTokenProperty = new GenericPropertyBuilder('refreshToken', [stringValidator]);

  const objectValidator = new GenericObjectValidator([refreshTokenProperty]);

  return objectValidator;
};
