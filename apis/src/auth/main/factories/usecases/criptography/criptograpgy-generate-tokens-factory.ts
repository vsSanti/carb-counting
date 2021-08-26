import { CriptographyGenerateTokens } from '@/auth/data/usecases/criptography/criptography-generate-tokens';
import { GenerateTokens } from '@/auth/domain/usecases';
import { JwtAdapter } from '@/auth/infra/criptography';
import env from '@/common/main/config/env';

export const makeCriptographyGenerateTokens = (): GenerateTokens => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);

  const criptographyGenerateTokens = new CriptographyGenerateTokens(jwtAdapter);

  return criptographyGenerateTokens;
};
