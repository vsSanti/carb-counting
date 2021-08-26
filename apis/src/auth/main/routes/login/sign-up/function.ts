import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeSignUpController } from '@/auth/main/factories/controllers/login/sign-up/sign-up-controller-factory';
import { typeORMAuthOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeSignUpController(),
  },
});
