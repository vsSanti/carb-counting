import { TokensModel } from '@/auth/domain/models';

export interface GenerateTokens {
  generate: (id: string) => Promise<TokensModel>;
}
