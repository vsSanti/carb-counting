import { TokensModel } from '@/domain/models/auth';

export interface GenerateTokens {
  generate: (id: string) => Promise<TokensModel>;
}
