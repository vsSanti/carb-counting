import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeSignUpController } from '@/auth/main/factories/controllers/login/sign-up/sign-up-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'auth',
  post: {
    handler: makeSignUpController(),
  },
});
