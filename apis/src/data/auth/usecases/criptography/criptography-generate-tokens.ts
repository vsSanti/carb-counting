import { Encrypter } from '@/data/auth/protocols/criptography';
import { TokensModel } from '@/domain/auth/models';
import { GenerateTokens } from '@/domain/auth/usecases';

export class CriptographyGenerateTokens implements GenerateTokens {
  constructor(private readonly encrypter: Encrypter) {}

  async generate(id: string): Promise<TokensModel> {
    const accessToken = await this.encrypter.encrypt(id);
    const refreshToken = await this.encrypter.encrypt(id, '7d');

    return {
      accessToken,
      refreshToken,
    };
  }
}
