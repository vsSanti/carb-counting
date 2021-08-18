import { Encrypter } from '@/data/protocols/criptography';
import { TokensModel } from '@/domain/models';
import { GenerateTokens } from '@/domain/usecases';

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
