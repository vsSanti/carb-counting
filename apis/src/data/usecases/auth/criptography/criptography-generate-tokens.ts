import { Encrypter } from '@/data/protocols/auth/criptography';
import { TokensModel } from '@/domain/models/auth';
import { GenerateTokens } from '@/domain/usecases/auth';

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
