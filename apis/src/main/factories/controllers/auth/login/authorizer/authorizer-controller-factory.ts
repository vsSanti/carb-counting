import { makeDbLoadPatientByToken } from '@/main/factories/usecases/patient/db-load-patient-by-token';
import { AuthorizerController } from '@/presentation/controllers/auth/login';
import { Controller } from '@/presentation/protocols';

export const makeAuthorizerController = (): Controller => {
  const refreshTokensController = new AuthorizerController(makeDbLoadPatientByToken());

  return refreshTokensController;
};
