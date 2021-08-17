import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeSignUpController } from '@/main/factories/controllers/login/signup/signup-controller-factory';

export const handler = lambdaRouteAdapter({
  post: {
    handler: makeSignUpController(),
  },
});
