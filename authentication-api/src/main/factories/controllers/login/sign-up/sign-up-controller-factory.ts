import { Controller } from 'presentation-common';

import { makeCriptographyGenerateTokens } from '@/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbAddPatient } from '@/main/factories/usecases/patient/db-add-patient';
import { SignUpController } from '@/presentation/controllers/login';

import { makeSignUpValidation } from './sign-up-validation-factory';

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeDbAddPatient(),
    makeCriptographyGenerateTokens()
  );

  return signUpController;
};
