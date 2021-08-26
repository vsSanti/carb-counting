import { TokensModel } from '@/domain/auth/models';

export interface GenerateTokens {
  generate: (id: string) => Promise<TokensModel>;
}
