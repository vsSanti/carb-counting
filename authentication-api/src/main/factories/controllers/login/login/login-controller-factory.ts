import { Controller } from 'presentation-common';

import { makeCriptographyGenerateTokens } from '@/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAuthentication } from '@/main/factories/usecases/patient/db-authentication-factory';
import { LoginController } from '@/presentation/controllers/login';

import { makeLoginValidation } from './login-validation-factory';

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(
    makeLoginValidation(),
    makeDbAuthentication(),
    makeCriptographyGenerateTokens()
  );

  return loginController;
};
