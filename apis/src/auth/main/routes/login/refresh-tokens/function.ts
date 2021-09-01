import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeRefreshTokensController } from '@/auth/main/factories/controllers/login/refresh-tokens/refresh-tokens-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'auth',
  post: {
    handler: makeRefreshTokensController(),
  },
});
