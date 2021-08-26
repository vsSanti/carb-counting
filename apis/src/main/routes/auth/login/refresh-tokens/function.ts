import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeRefreshTokensController } from '@/main/factories/auth/controllers/login/refresh-tokens/refresh-tokens-controller-factory';
import { typeORMAuthOptions } from '@/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeRefreshTokensController(),
  },
});
