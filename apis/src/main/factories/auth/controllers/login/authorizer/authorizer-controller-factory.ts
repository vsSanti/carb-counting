import { makeDbLoadPatientByToken } from '@/main/factories/auth/usecases/patient/db-load-patient-by-token';
import { AuthorizerController } from '@/presentation/auth/controllers/login';
import { Controller } from '@/presentation/common/protocols';

export const makeAuthorizerController = (): Controller => {
  const refreshTokensController = new AuthorizerController(makeDbLoadPatientByToken());

  return refreshTokensController;
};
