import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeLoginController } from '@/auth/main/factories/controllers/login/login/login-controller-factory';
import { typeORMAuthOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  post: {
    handler: makeLoginController(),
  },
});
