import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeLoginController } from '@/main/factories/auth/controllers/login/login/login-controller-factory';
import { typeORMAuthOptions } from '@/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeLoginController(),
  },
});
