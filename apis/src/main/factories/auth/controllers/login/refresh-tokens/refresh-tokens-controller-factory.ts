import { makeCriptographyGenerateTokens } from '@/main/factories/auth/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbLoadPatientByToken } from '@/main/factories/auth/usecases/patient/db-load-patient-by-token';
import { RefreshTokensController } from '@/presentation/auth/controllers/login';
import { Controller } from '@/presentation/common/protocols';

import { makeRefreshTokensValidation } from './refresh-tokens-validaiton-factory';

export const makeRefreshTokensController = (): Controller => {
  const refreshTokensController = new RefreshTokensController(
    makeRefreshTokensValidation(),
    makeDbLoadPatientByToken(),
    makeCriptographyGenerateTokens()
  );

  return refreshTokensController;
};
