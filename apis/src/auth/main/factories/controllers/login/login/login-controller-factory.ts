import { makeCriptographyGenerateTokens } from '@/auth/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAuthentication } from '@/auth/main/factories/usecases/patient/db-authentication-factory';
import { LoginController } from '@/auth/presentation/controllers/login';
import { Controller } from '@/common/presentation/protocols';

import { makeLoginValidation } from './login-validation-factory';

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(
    makeLoginValidation(),
    makeDbAuthentication(),
    makeCriptographyGenerateTokens()
  );

  return loginController;
};
