import { makeCriptographyGenerateTokens } from '@/main/factories/usecases/criptography/criptograpgy-generate-tokens';
import { makeDbAddPatient } from '@/main/factories/usecases/patient/db-add-patient';
import { SignUpController } from '@/presentation/controllers/login';
import { Controller } from '@/presentation/protocols';

import { makeSignUpValidation } from './signup-validation-factory';

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeDbAddPatient(),
    makeCriptographyGenerateTokens()
  );

  return signUpController;
};
