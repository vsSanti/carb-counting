import { makeCriptographyGenerateTokens } from '@/main/factories/usecases/criptography/criptograpgy-generate-tokens-factory';
import { makeDbLoadPatientByToken } from '@/main/factories/usecases/patient/db-load-patient-by-token';
import { RefreshTokensController } from '@/presentation/controllers/login';
import { Controller } from '@/presentation/protocols';

import { makeRefreshTokensValidation } from './refresh-tokens-validaiton-factory';

export const makeRefreshTokensController = (): Controller => {
  const refreshTokensController = new RefreshTokensController(
    makeRefreshTokensValidation(),
    makeDbLoadPatientByToken(),
    makeCriptographyGenerateTokens()
  );

  return refreshTokensController;
};
