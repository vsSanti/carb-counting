import faker from 'faker';

import { TokensModel } from '@/domain/models/auth';
import { GenerateTokens } from '@/domain/usecases/auth';

export class GenerateTokensSpy implements GenerateTokens {
  tokensModel = {
    accessToken: faker.datatype.uuid(),
    refreshToken: faker.datatype.uuid(),
  };
  id: string;

  async generate(id: string): Promise<TokensModel> {
    this.id = id;
    return Promise.resolve(this.tokensModel);
  }
}
