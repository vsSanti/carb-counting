import { AuthenticationModel } from '@/domain/models';

export interface GenerateTokens {
  generate: (id: string) => Promise<AuthenticationModel>;
}
