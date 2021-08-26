import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeSignUpController } from '@/main/factories/auth/controllers/login/sign-up/sign-up-controller-factory';
import { typeORMAuthOptions } from '@/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeSignUpController(),
  },
});
