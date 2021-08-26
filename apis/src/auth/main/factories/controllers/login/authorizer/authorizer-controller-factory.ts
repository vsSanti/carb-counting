import { makeDbLoadPatientByToken } from '@/auth/main/factories/usecases/patient/db-load-patient-by-token';
import { AuthorizerController } from '@/auth/presentation/controllers/login';
import { Controller } from '@/common/presentation/protocols';

export const makeAuthorizerController = (): Controller => {
  const refreshTokensController = new AuthorizerController(makeDbLoadPatientByToken());

  return refreshTokensController;
};
