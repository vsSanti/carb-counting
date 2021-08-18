import { Encrypter } from '@/data/protocols/criptography';
import { AuthenticationModel } from '@/domain/models';
import { GenerateTokens } from '@/domain/usecases';

export class CriptographyGenerateTokens implements GenerateTokens {
  constructor(private readonly encrypter: Encrypter) {}

  async generate(id: string): Promise<AuthenticationModel> {
    const accessToken = await this.encrypter.encrypt(id);
    const refreshToken = await this.encrypter.encrypt(id, '7d');

    return {
      accessToken,
      refreshToken,
    };
  }
}
