import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeRefreshTokensController } from '@/main/factories/auth/controllers/login/refresh-tokens/refresh-tokens-controller-factory';

export const handler = lambdaRouteAdapter({
  post: {
    handler: makeRefreshTokensController(),
  },
});
