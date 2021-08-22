import { Controller } from 'presentation-common';

import { makeDbLoadPatientByToken } from '@/main/factories/usecases/patient/db-load-patient-by-token';
import { AuthorizerController } from '@/presentation/controllers/login';

export const makeAuthorizerController = (): Controller => {
  const refreshTokensController = new AuthorizerController(makeDbLoadPatientByToken());

  return refreshTokensController;
};
