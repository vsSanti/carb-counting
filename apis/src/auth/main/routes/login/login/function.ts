import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeLoginController } from '@/auth/main/factories/controllers/login/login/login-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'auth',
  post: {
    handler: makeLoginController(),
  },
});
