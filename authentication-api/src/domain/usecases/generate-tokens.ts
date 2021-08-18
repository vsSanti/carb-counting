import { TokensModel } from '@/domain/models';

export interface GenerateTokens {
  generate: (id: string) => Promise<TokensModel>;
}
