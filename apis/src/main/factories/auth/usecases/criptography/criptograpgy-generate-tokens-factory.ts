import { CriptographyGenerateTokens } from '@/data/auth/usecases/criptography/criptography-generate-tokens';
import { GenerateTokens } from '@/domain/auth/usecases';
import { JwtAdapter } from '@/infra/auth/criptography';
import env from '@/main/config/env';

export const makeCriptographyGenerateTokens = (): GenerateTokens => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);

  const criptographyGenerateTokens = new CriptographyGenerateTokens(jwtAdapter);

  return criptographyGenerateTokens;
};
