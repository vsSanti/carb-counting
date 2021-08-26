import faker from 'faker';

import { TokensModel } from '@/domain/auth/models';

export const mockTokensModel = (): TokensModel => ({
  accessToken: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid(),
});
