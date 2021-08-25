import faker from 'faker';

import { TokensModel } from '@/domain/models';

export const mockTokensModel = (): TokensModel => ({
  accessToken: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid(),
});
