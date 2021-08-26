import faker from 'faker';

import { TokensModel } from '@/domain/models/auth';

export const mockTokensModel = (): TokensModel => ({
  accessToken: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid(),
});
