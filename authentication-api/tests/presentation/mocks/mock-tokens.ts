import faker from 'faker';

import { AuthenticationModel } from '@/domain/models';
import { GenerateTokens } from '@/domain/usecases';

export class GenerateTokensSpy implements GenerateTokens {
  authenticationModel = {
    accessToken: faker.datatype.uuid(),
    refreshToken: faker.datatype.uuid(),
  };
  id: string;

  async generate(id: string): Promise<AuthenticationModel> {
    this.id = id;
    return Promise.resolve(this.authenticationModel);
  }
}
