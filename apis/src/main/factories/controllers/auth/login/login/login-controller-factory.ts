import { makeCriptographyGenerateTokens } from '@/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAuthentication } from '@/main/factories/usecases/patient/db-authentication-factory';
import { LoginController } from '@/presentation/controllers/auth/login';
import { Controller } from '@/presentation/protocols';

import { makeLoginValidation } from './login-validation-factory';

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(
    makeLoginValidation(),
    makeDbAuthentication(),
    makeCriptographyGenerateTokens()
  );

  return loginController;
};
