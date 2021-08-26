import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeSignUpController } from '@/main/factories/auth/controllers/login/sign-up/sign-up-controller-factory';

export const handler = lambdaRouteAdapter({
  post: {
    handler: makeSignUpController(),
  },
});
