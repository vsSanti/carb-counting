import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeLoginController } from '@/main/factories/controllers/login/login/login-controller-factory';

export const handler = lambdaRouteAdapter({
  post: {
    handler: makeLoginController(),
  },
});
