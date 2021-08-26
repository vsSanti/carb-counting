import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeRefreshTokensController } from '@/auth/main/factories/controllers/login/refresh-tokens/refresh-tokens-controller-factory';
import { typeORMAuthOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeRefreshTokensController(),
  },
});
