import { makeDbAddPatient } from '@/main/factories/usecases/patient/db-add-patient';
import { makeDbAuthentication } from '@/main/factories/usecases/patient/db-authentication-factory';
import { SignUpController } from '@/presentation/controllers/login';
import { Controller } from '@/presentation/protocols';

import { makeSignUpValidation } from './signup-validation-factory';

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeDbAddPatient(),
    makeDbAuthentication()
  );

  return signUpController;
};
