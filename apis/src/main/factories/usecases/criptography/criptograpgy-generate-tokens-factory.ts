import { CriptographyGenerateTokens } from '@/data/usecases/auth/criptography/criptography-generate-tokens';
import { GenerateTokens } from '@/domain/usecases/auth';
import { JwtAdapter } from '@/infra/criptography';
import env from '@/main/config/env';

export const makeCriptographyGenerateTokens = (): GenerateTokens => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);

  const criptographyGenerateTokens = new CriptographyGenerateTokens(jwtAdapter);

  return criptographyGenerateTokens;
};
