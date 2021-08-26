import { makeCriptographyGenerateTokens } from '@/main/factories/auth/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAddPatient } from '@/main/factories/auth/usecases/patient/db-add-patient';
import { SignUpController } from '@/presentation/auth/controllers/login';
import { Controller } from '@/presentation/common/protocols';

import { makeSignUpValidation } from './sign-up-validation-factory';

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeDbAddPatient(),
    makeCriptographyGenerateTokens()
  );

  return signUpController;
};
