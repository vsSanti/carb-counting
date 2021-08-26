import { makeCriptographyGenerateTokens } from '@/auth/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAddPatient } from '@/auth/main/factories/usecases/patient/db-add-patient';
import { SignUpController } from '@/auth/presentation/controllers/login';
import { Controller } from '@/common/presentation/protocols';

import { makeSignUpValidation } from './sign-up-validation-factory';

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeDbAddPatient(),
    makeCriptographyGenerateTokens()
  );

  return signUpController;
};
