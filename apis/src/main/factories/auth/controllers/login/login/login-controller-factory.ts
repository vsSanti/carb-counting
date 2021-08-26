import { makeCriptographyGenerateTokens } from '@/main/factories/auth/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAuthentication } from '@/main/factories/auth/usecases/patient/db-authentication-factory';
import { LoginController } from '@/presentation/auth/controllers/login';
import { Controller } from '@/presentation/common/protocols';

import { makeLoginValidation } from './login-validation-factory';

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(
    makeLoginValidation(),
    makeDbAuthentication(),
    makeCriptographyGenerateTokens()
  );

  return loginController;
};
